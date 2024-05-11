import { ThunkDispatch } from '@reduxjs/toolkit'
import { Suspense, lazy, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { AnyAction } from 'redux'
import Translations from '../../components/Translations'

import { deductCreditsAiArt, generateAiImage, saveResultImageAi } from '../../services/aiArtGenerator'
import { DEFAULT_ALPHA, DEFAULT_SCALE, DEFAULT_STEPS, ERROR_MESSAGES } from '../../utils/constants'
import { useUploadFile } from '../../utils/handleUploadFile'
import { convertImageToBase64 } from '../../utils/imageToBase64'
import { useCheckCredit } from '../../utils/useCheckCredit'
import { useCheckLogin } from '../../utils/useCheckLogin'
import { useGetInfoUser } from '../../utils/useGetInfoUser'
import ConfigAiArt from './components/ConfigAiArt'
import Loading from './components/Loading'
import PromptInput from './components/PromptInput'
import StyleImageCarousel from './components/StyleImageCarousel'
import { MainContent, SectionContents, WrapperAiArtGenerator } from './styles'
import { TypeConfig } from './types'
import { uploadFile } from '../../redux/Slices/AppSlice'
import { RootState } from '../../redux/Slices/RootReducer'
import { fetchListStyleAiImg } from '../../redux/Thunks/GetStyleAiImages/fetchStyleAiImg'

const AiArtResult = lazy(() => import('./components/ResultAiArt'))
const ImageUploader = lazy(() => import('./components/ImageUploader'))

function AiArtGenerator() {
  const [sliderValueAlpha, setSliderValueAlpha] = useState(DEFAULT_ALPHA)
  const [sliderValueSteps, setSliderValueSteps] = useState(DEFAULT_STEPS)
  const [sliderValueScale, setSliderValueScale] = useState(DEFAULT_SCALE)
  const [prompt, setPrompt] = useState('')
  const [resultImage, setResultImage] = useState('')
  const [negativePrompt, setNegativePrompt] = useState('')
  const [selectStyle, setSelectStyle] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { handleUploadImage, fileUpload, uploadImage, setFileUpload, setUploadImage } = useUploadFile()

  const { handleCheckCredit } = useCheckCredit()
  const user = useSelector((state: RootState) => state.app.user)
  const { listStyle } = useSelector((state: RootState) => state.getListStyle)
  const [getUser] = useGetInfoUser()
  const { handleCheckLogin } = useCheckLogin()
  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, AnyAction>>()

  useEffect(() => {
    dispatch(fetchListStyleAiImg()) //lấy danh sách style imageAiArt
  }, [])

  // hàm click style imageAiArt
  const handleClickStyle = useCallback((style: { config: TypeConfig }) => {
    setSelectStyle(style)
    setSliderValueAlpha(style.config.alpha)
    setSliderValueSteps(style.config.numInferenceSteps)
    setSliderValueScale(style.config.guidanceScale)
  }, [])

  // hàm click item none
  const handleClickNoneStyle = useCallback(() => {
    setSelectStyle(null)
    setSliderValueAlpha(DEFAULT_ALPHA)
    setSliderValueSteps(DEFAULT_STEPS)
    setSliderValueScale(DEFAULT_SCALE)
  }, [])

  // hàm back
  const handleBack = useCallback(() => {
    dispatch(uploadFile(false))
    setFileUpload(undefined)
    setResultImage('')
    setUploadImage('')
    setNegativePrompt('')
    setPrompt('')
    handleClickNoneStyle()
  }, [dispatch, handleClickNoneStyle, setFileUpload, setUploadImage])

  // Thêm các thông điệp vào formData
  const appendPromptsToFormData = useCallback(
    (formData: FormData) => {
      if (prompt.trim()) {
        formData.append(
          'positivePrompt',
          selectStyle ? prompt.trim() + ',' + selectStyle?.config?.positivePrompt : prompt.trim()
        )
      } else {
        if (selectStyle) {
          formData.append('positivePrompt', selectStyle?.config?.positivePrompt)
        }
      }
      if (negativePrompt.trim()) {
        if (selectStyle) {
          formData.append('negativePrompt', negativePrompt.trim() + ', ' + selectStyle?.config?.negativePrompt)
        } else {
          formData.append('negativePrompt', negativePrompt.trim())
        }
      } else {
        if (selectStyle) {
          formData.append('negativePrompt', selectStyle?.config?.negativePrompt)
        }
      }
    },
    [prompt, negativePrompt, selectStyle]
  )

  // Chuẩn bị dữ liệu form để gửi lên server
  const prepareFormData = useCallback(() => {
    const formData = new FormData()
    if (fileUpload) {
      formData.append('file', fileUpload)
    }
    if (selectStyle) {
      formData.append('style', selectStyle?.config?.style)
    }
    appendPromptsToFormData(formData)
    formData.append('alpha', sliderValueAlpha.toString())
    formData.append('guidanceScale', sliderValueScale.toString())
    formData.append('numInferenceSteps', sliderValueSteps.toString())
    return formData
  }, [fileUpload, selectStyle, appendPromptsToFormData, sliderValueAlpha, sliderValueScale, sliderValueSteps])

  // Trừ credits và lưu kết quả hình ảnh
  const deductCreditsAndSaveResult = useCallback(
    async (base64ImageString: string) => {
      try {
        const res = await deductCreditsAiArt()
        toast.success(res.data.message || 'Success!')
        getUser() // cập nhật lại credit
        const body = {
          url: base64ImageString,
          config: {
            step: sliderValueSteps,
            style: selectStyle?.name || 'None',
            alpha: sliderValueAlpha,
            scale: sliderValueScale,
            positivePrompt: prompt.trim() || '',
            negativePrompt: negativePrompt.trim() || ''
          }
        }
        await saveResultImageAi(body) // lưu kết quả hình ảnh
      } catch (error: any) {
        toast.error(error.response?.data?.message || <Translations text={ERROR_MESSAGES.SERVER_ERROR} />)
      }
    },
    [getUser, sliderValueSteps, selectStyle?.name, sliderValueAlpha, sliderValueScale, prompt, negativePrompt]
  )

  // hàm create Image AiArt
  const handleGenerate = useCallback(async () => {
    if (handleCheckLogin()) {
      return
    }
    // Kiểm tra số lượng credit
    if (handleCheckCredit(user?.credits ?? 0, 5)) {
      return
    }
    setIsLoading(true)
    const formData = prepareFormData()
    try {
      const res = await generateAiImage(formData)
      const base64ImageString = await convertImageToBase64(res.data)
      setResultImage(base64ImageString)
      setIsLoading(false)
      await deductCreditsAndSaveResult(base64ImageString) // Trừ credits và lưu kết quả hình ảnh
    } catch (error) {
      toast.error('Error. Please try again.')
      setIsLoading(false)
    }
  }, [handleCheckLogin, handleCheckCredit, user?.credits, setIsLoading, prepareFormData, deductCreditsAndSaveResult])

  return (
    <WrapperAiArtGenerator>
      {resultImage ? (
        <Suspense>
          <AiArtResult
            prompt={prompt}
            resultImage={resultImage}
            selectStyle={selectStyle}
            sliderValueSteps={sliderValueSteps}
            sliderValueScale={sliderValueScale}
            sliderValueAlpha={sliderValueAlpha}
            negativePrompt={negativePrompt}
            handleBack={handleBack}
          />
        </Suspense>
      ) : (
        <SectionContents>
          <MainContent>
            <StyleImageCarousel
              listStyle={listStyle}
              selectStyle={selectStyle}
              handleClickNoneStyle={handleClickNoneStyle}
              handleClickStyle={handleClickStyle}
            />
            <Suspense>
              <ImageUploader
                uploadImage={uploadImage}
                handleUploadImage={handleUploadImage}
                setUploadImage={setUploadImage}
              />
            </Suspense>
            <PromptInput
              prompt={prompt}
              setPrompt={setPrompt}
              negativePrompt={negativePrompt}
              setNegativePrompt={setNegativePrompt}
            />
          </MainContent>

          <ConfigAiArt
            prompt={prompt}
            isLoading={isLoading}
            negativePrompt={negativePrompt}
            sliderValueAlpha={sliderValueAlpha}
            sliderValueSteps={sliderValueSteps}
            sliderValueScale={sliderValueScale}
            setSliderValueAlpha={setSliderValueAlpha}
            setSliderValueSteps={setSliderValueSteps}
            setSliderValueScale={setSliderValueScale}
            handleGenerate={handleGenerate}
          />
        </SectionContents>
      )}

      {isLoading && <Loading />}
    </WrapperAiArtGenerator>
  )
}

export default AiArtGenerator
