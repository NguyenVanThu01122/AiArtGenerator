import { Checkbox } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AnimationStar from '../../components/AnimationStar'
import { SidebarImageLogin } from '../../components/SidebarImageLogin'
import TextFieldController from '../../components/Ui/TextFieldController '
import ImageGeneral from '../../components/Ui/image'
import { TextFieldType } from '../../components/Ui/textFieldCommon'
import { saveLogin } from '../../reduxToolkit/Slices/AppSlice'
import { ROUTES } from '../../routes/routes'
import { FormValues, login } from '../../services/auth'
import { SUCCESS_MESSAGE } from '../../utils/constants'
import { saveRefreshTokenLocalStorage, saveTokenLocalStorage } from '../../utils/handleTokenUtils'
import { imageDiscord, imageFacebook, imageGoogle, imageLogin } from '../../utils/images'
import { handleFacebookAuth, handleGoogleAuth } from '../../utils/redirectToAuthProvider'
import { useChangeLanguage } from '../../utils/useChangeLanguage'
import { validateEmail, validatePassword } from '../../utils/validationRules'
import { ItemSidebar } from '../Register/styles'
import { DialogForgotPassword } from './components/DialogForgotPassword'
import PasswordVisibilityToggle from './components/PasswordVisibilityToggle'
import {
  BoxSignIn,
  ContentSignIn,
  ForgotPassword,
  GroupImageGeneral,
  GroupSpan,
  NavigateRegister,
  OptionItem,
  RedirectSignOut,
  SignInOptions,
  StyledFormControl,
  StyledFormControlLabel,
  StyledFormGroup,
  SubmitItem,
  SubmitSignIn,
  TitleForm,
  WrapperSignIn
} from './styles'

export function SignIn() {
  const { t } = useTranslation()
  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const [isModalPassword, setIsModalPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useChangeLanguage() // custom hook này sẽ tự động save language khi user f5

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    mode: 'onChange'
  })

  // hàm xử lý form login
  const handleOnFinishLogin = (value: FormValues) => {
    if (!value) {
      return
    }
    const bodyLogin = {
      email: value?.email,
      password: value?.password
    }
    login(bodyLogin)
      .then((res) => {
        dispatch(saveLogin(true))
        saveTokenLocalStorage('token', res.data?.token)
        saveRefreshTokenLocalStorage('refreshToken', res.data?.refreshToken)
        navigate('/')
        toast.success(t(SUCCESS_MESSAGE.SUCCESS_LOGIN))
        reset()
      })
      .catch((error) => toast.error(error.response?.data?.message))
  }

  // mở modal quên password
  const showModalForgotPassword = () => {
    setIsModalPassword(true)
    setIsForgotPassword(true)
  }
  return (
    <WrapperSignIn>
      <AnimationStar />
      {isModalPassword && <div className='empty-div'></div>}
      <ItemSidebar>
        <SidebarImageLogin />
      </ItemSidebar>
      <BoxSignIn>
        <ContentSignIn>
          <SignInOptions>
            <ImageGeneral className='icon-login' src={imageLogin} alt='' />
            <TitleForm>{t('Sign in to your account')}</TitleForm>
            <GroupImageGeneral>
              <ImageGeneral className='icon-google' onClick={handleGoogleAuth} src={imageGoogle} alt='imageGoogle' />
              <ImageGeneral
                className='icon-discord'
                src={imageDiscord}
                alt='imageDiscord'
                onClick={() => {
                  toast.warning(t('Discord is not available now'))
                }}
              />
              <ImageGeneral
                className='icon-facebook'
                onClick={handleFacebookAuth}
                src={imageFacebook}
                alt='imageFacebook'
              />
            </GroupImageGeneral>
            <GroupSpan>
              <span></span>
              <span>{t('OR')}</span>
              <span></span>
            </GroupSpan>
          </SignInOptions>

          {/* form login */}
          <StyledFormControl fullWidth>
            <StyledFormGroup>
              <TextFieldController
                name='email'
                type={TextFieldType.EMAIL}
                control={control}
                errors={errors}
                label={t('Email')}
                fullWidth
                margin='normal'
                defaultValue=''
                variant='outlined'
                rules={validateEmail}
              />
              <TextFieldController
                name='password'
                type={showPassword ? TextFieldType.TEXT : TextFieldType.PASSWORD}
                control={control}
                errors={errors}
                label={t('password')}
                fullWidth
                margin='normal'
                defaultValue=''
                variant='outlined'
                rules={validatePassword}
                InputProps={{
                  endAdornment: (
                    <PasswordVisibilityToggle showPassword={showPassword} setShowPassword={setShowPassword} />
                  )
                }}
              />
            </StyledFormGroup>
            <OptionItem>
              <StyledFormControlLabel required label={t('Remember me !')} control={<Checkbox />} />
              <ForgotPassword onClick={showModalForgotPassword}>{t('Forgot Password?')}</ForgotPassword>
            </OptionItem>
            <SubmitItem>
              <SubmitSignIn onClick={handleSubmit(handleOnFinishLogin)}>{t('Sign in')}</SubmitSignIn>
              <RedirectSignOut>
                <div>{t("Don't have an account?")}</div>
                <NavigateRegister onClick={() => navigate(ROUTES.REGISTER)}>{t('Register')}</NavigateRegister>
              </RedirectSignOut>
              <div>VisionLab., Inc</div>
            </SubmitItem>
          </StyledFormControl>
        </ContentSignIn>
      </BoxSignIn>

      {/* Modal Forgot password */}
      <DialogForgotPassword
        isForgotPassword={isForgotPassword}
        isModalPassword={isModalPassword}
        setIsModalPassword={setIsModalPassword}
        setIsForgotPassword={setIsForgotPassword}
      />
    </WrapperSignIn>
  )
}
