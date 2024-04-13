import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Translations from '../../components/Translations'
import TextFieldController from '../../components/Ui/TextFieldController '
import ButtonGeneral from '../../components/Ui/button'
import ImageGeneral from '../../components/Ui/image'
import { TextFieldType } from '../../components/Ui/textFieldCommon'
import iconBack from '../../images/ic-back.svg'
import logo from '../../images/iconLogin.png'
import imgChangePassword from '../../images/imageLogin4.png'
import { changePassword } from '../../services/changePassword'
import { useChangeLanguage } from '../../utils/useChangeLanguage'
import { validatePassword } from '../../utils/validationRules'
import PasswordVisibilityToggle from '../SignIn/components/PasswordVisibilityToggle'
import {
  BackToSigIn,
  ContentForm,
  ContentImage,
  FormChangePassword,
  ItemBack,
  ItemIfo,
  ItemImage,
  LouisTomlin,
  SetNewPassword,
  StyledFormGroup,
  TextContent,
  TitleForm,
  VisionLab,
  WrapperChangePassword,
  Youtube
} from './styles'

function ChangePassword() {
  useChangeLanguage()
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [searchParam] = useSearchParams()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm({
    mode: 'onChange'
  })

  const submitForm = async (values: any) => {
    try {
      const body = {
        token: searchParam.get('token') as string, // token in url
        password: values.password
      }
      await changePassword(body)
      navigate('/sign-in')
      toast.success(t('Change password successfully!'))
      reset()
    } catch (error: any) {
      toast.error(error.response.data.message || t('Change password failed!'))
    }
  }

  return (
    <WrapperChangePassword>
      <ItemImage>
        <ImageGeneral src={imgChangePassword} alt='' />
        <ContentImage>
          <TextContent>
            <Translations
              text={'The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.'}
            />
          </TextContent>
          <ItemIfo>
            <LouisTomlin>Louis Tomlin</LouisTomlin>
            <Youtube>Youtube</Youtube>
          </ItemIfo>
        </ContentImage>
      </ItemImage>
      <FormChangePassword>
        <ContentForm>
          <TitleForm>
            <ImageGeneral src={logo} alt='' />
            <SetNewPassword>
              <Translations text={'Set new password'} />
            </SetNewPassword>
          </TitleForm>
          <StyledFormGroup>
            <TextFieldController
              fullWidth
              errors={errors}
              name='password'
              control={control}
              rules={validatePassword}
              variant='filled'
              label={t('New Password')}
              type={showPassword ? TextFieldType.TEXT : TextFieldType.PASSWORD}
              InputProps={{
                endAdornment: <PasswordVisibilityToggle showPassword={showPassword} setShowPassword={setShowPassword} />
              }}
            />
            <TextFieldController
              fullWidth
              errors={errors}
              name='confirm'
              control={control}
              type={showConfirm ? TextFieldType.TEXT : TextFieldType.PASSWORD}
              rules={{
                required: t('Please enter your password !'),
                validate: (value: string) => value === watch('password') || t('Passwords do not match !')
              }}
              variant='filled'
              label={t('Confirm New Password')}
              InputProps={{
                endAdornment: <PasswordVisibilityToggle showPassword={showConfirm} setShowPassword={setShowConfirm} />
              }}
            />
          </StyledFormGroup>

          <ButtonGeneral i18nKey='Set new password' onClick={handleSubmit(submitForm)} className='btn' />
          <ItemBack onClick={() => navigate('/sign-in')}>
            <ImageGeneral src={iconBack} alt='' />
            <BackToSigIn>
              <Translations text={'Back to sign In'} />
            </BackToSigIn>
          </ItemBack>
          <VisionLab>VisionLab., Inc</VisionLab>
        </ContentForm>
      </FormChangePassword>
    </WrapperChangePassword>
  )
}
export default ChangePassword
