import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useClipboard } from 'use-clipboard-copy'
import ButtonGeneral from '../../../../components/Ui/button'
import ImageGeneral from '../../../../components/Ui/image'
import icCopy from '../../../../images/ic-copy.svg'
import { useDownloadUtils } from '../../../../utils/useDownloadUtils'

import { toast } from 'react-toastify'
import Translations from '../../../../components/Translations'
import {
  BackItem,
  BackToGenerate,
  BoxResult,
  ButtonGroup,
  Content,
  ContentText,
  DisplayImage,
  IconBack,
  ImageResult,
  InfoParameter,
  ResultsItem,
  SectionParameter,
  TitlePage,
  TitleParameter
} from './styles'

type AiArtResultProps = {
  resultImage: string
  selectStyle: any
  sliderValueSteps: number
  sliderValueScale: number
  sliderValueAlpha: number
  prompt: string
  negativePrompt: string
  handleBack: () => void
}

export default function AiArtResult(props: AiArtResultProps) {
  const {
    resultImage,
    selectStyle,
    sliderValueSteps,
    sliderValueScale,
    sliderValueAlpha,
    prompt,
    negativePrompt,
    handleBack
  } = props

  const { handleDownloadImage } = useDownloadUtils()
  const clipboard = useClipboard()

  const detailParameters = [
    {
      title: 'Style',
      content: selectStyle ? selectStyle.name : '-'
    },
    {
      title: 'Step',
      content: sliderValueSteps
    },
    {
      title: 'Created',
      content: new Date().toDateString()
    },
    {
      title: 'Guidance Scale',
      content: sliderValueScale
    },
    {
      title: 'Alpha',
      content: sliderValueAlpha
    },
    {
      title: 'Prompt',
      content: prompt.trim() ? prompt.trim() : '-'
    },
    {
      title: 'Negative Prompt',
      content: negativePrompt.trim() ? negativePrompt.trim() : '-'
    }
  ]

  const handleCopyText = () => {
    const promptItem = detailParameters.find((item) => item.title === 'Prompt')
    if (promptItem) {
      clipboard.copy(promptItem.content)
      toast.success('Copy successfully')
    }
  }
  return (
    <ResultsItem>
      <BackItem onClick={handleBack}>
        <IconBack icon={faAngleLeft} />
        <BackToGenerate>
          <Translations text={'Back to Generate'} />
        </BackToGenerate>
      </BackItem>
      <BoxResult>
        <DisplayImage>
          <ImageResult src={resultImage} />
        </DisplayImage>
        <SectionParameter>
          <TitlePage>
            <Translations text={'AI Art Result'} />
          </TitlePage>
          <InfoParameter>
            {detailParameters.map((item, index) => (
              <ContentText key={index}>
                <TitleParameter>
                  <Translations text={item.title} />
                </TitleParameter>
                <Content>{item.content}</Content>
              </ContentText>
            ))}
          </InfoParameter>
          <ButtonGroup>
            <ButtonGeneral
              i18nKey='Copy Prompt'
              className='copy-button'
              onClick={() => handleCopyText()}
              sx={{ bgcolor: 'primary.main' }}
            >
              <ImageGeneral src={icCopy} />
            </ButtonGeneral>
            <ButtonGeneral
              i18nKey='Download'
              className='download-button'
              onClick={() => handleDownloadImage(resultImage, 'img.jpg')}
            />
          </ButtonGroup>
        </SectionParameter>
      </BoxResult>
    </ResultsItem>
  )
}
