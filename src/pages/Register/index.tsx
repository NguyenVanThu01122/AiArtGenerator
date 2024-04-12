import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AnimationStar from "../../components/AnimationStar";
import EmailSentDialog from "../../components/SentEmailDialog";
import { SidebarImageLogin } from "../../components/SidebarImageLogin";
import TextFieldController from "../../components/Ui/TextFieldController ";
import ImageGeneral from "../../components/Ui/image";
import { TextFieldType } from "../../components/Ui/textFieldCommon";
import { ROUTES } from "../../routes/routes";
import { RegisterType, register } from "../../services/auth";
import {
  imageDiscord,
  imageFacebook,
  imageGoogle,
  imageLogin,
} from "../../utils/images";
import {
  handleFacebookAuth,
  handleGoogleAuth,
} from "../../utils/redirectToAuthProvider";
import { useChangeLanguage } from "../../utils/useChangeLanguage";
import {
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
} from "../../utils/validationRules";
import PasswordVisibilityToggle from "../SignIn/components/PasswordVisibilityToggle";
import { GroupSpan, TitleForm } from "../SignIn/styles";
import {
  BoxContent,
  ContainerRegister,
  GroupImageGeneral,
  ItemSidebar,
  OptionLogin,
  OptionSubmit,
  SignUpOptions,
  StyledFormControl,
  SubmitLogin,
  SubmitRegister,
  WrapperRegister,
} from "./styles";

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  useChangeLanguage(); // custom hook này sẽ tự động save language khi user f5
  const [openDialogSentEmail, setOpenDialogSentEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  // hàm xử lý form register
  const handleOnFinishRegister = (value: RegisterType) => {
    const bodyRegister = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      password: value.password,
      redirectUrl: "http://localhost:3000/verify-register", // link verify email
    };
    register(bodyRegister)
      .then((res) => {
        setOpenDialogSentEmail(true);
      })
      .catch((error) => toast.error(error.response?.data?.message));
  };

  const handleClose = () => {
    setOpenDialogSentEmail(false);
    reset(); // Reset form về trạng thái rỗng
  };

  const handleTryAgain = () => setOpenDialogSentEmail(false);
  return (
    <WrapperRegister>
      <AnimationStar />
      <ItemSidebar>
        <SidebarImageLogin />
      </ItemSidebar>
      {/* content Register */}
      <ContainerRegister>
        <BoxContent>
          <SignUpOptions>
            <ImageGeneral className="logo-login" src={imageLogin} />
            <TitleForm>{t("Sign up to your account")}</TitleForm>
            <GroupImageGeneral>
              <ImageGeneral
                className="icon-google"
                onClick={handleGoogleAuth}
                src={imageGoogle}
              />
              <ImageGeneral className="icon-discord" src={imageDiscord} />
              <ImageGeneral
                className="icon-facebook"
                onClick={handleFacebookAuth}
                src={imageFacebook}
              />
            </GroupImageGeneral>
            <GroupSpan>
              <span></span>
              <span>{t("OR")}</span>
              <span></span>
            </GroupSpan>
          </SignUpOptions>

          {/* form Register */}
          <StyledFormControl fullWidth>
            <TextFieldController
              name="firstName"
              control={control}
              defaultValue=""
              type={TextFieldType.TEXT}
              label={t("First Name")}
              fullWidth
              margin="normal"
              variant="outlined"
              rules={validateFirstName}
              errors={errors}
            />
            <TextFieldController
              name="lastName"
              control={control}
              defaultValue=""
              type={TextFieldType.TEXT}
              label={t("Last Name")}
              fullWidth
              margin="normal"
              variant="outlined"
              errors={errors}
              rules={validateLastName}
            />
            <TextFieldController
              name="email"
              control={control}
              defaultValue=""
              type={TextFieldType.EMAIL}
              label={t("Email")}
              fullWidth
              margin="normal"
              variant="outlined"
              errors={errors}
              rules={validateEmail}
            />
            <TextFieldController
              name="password"
              control={control}
              defaultValue=""
              label={t("Password")}
              fullWidth
              margin="normal"
              variant="outlined"
              errors={errors}
              rules={validatePassword}
              type={showPassword ? TextFieldType.TEXT : TextFieldType.PASSWORD}
              InputProps={{
                endAdornment: (
                  <PasswordVisibilityToggle
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />
                ),
              }}
            />
            <TextFieldController
              name="confirm"
              control={control}
              defaultValue=""
              fullWidth
              margin="normal"
              variant="outlined"
              label={t("Confirm Password")}
              errors={errors}
              type={
                showConfirmPassword
                  ? TextFieldType.TEXT
                  : TextFieldType.PASSWORD
              }
              InputProps={{
                endAdornment: (
                  <PasswordVisibilityToggle
                    showPassword={showConfirmPassword}
                    setShowPassword={setShowConfirmPassword}
                  />
                ),
              }}
              rules={{
                required: t("Please confirm your password!"),
                validate: (value: string) =>
                  value === watch("password") || t("Passwords do not match !"),
              }}
            />
          </StyledFormControl>

          <OptionSubmit>
            <SubmitRegister onClick={handleSubmit(handleOnFinishRegister)}>
              {t("Sign up")}
            </SubmitRegister>
            <OptionLogin>
              <div>{t("Don't have an account?")}</div>
              <SubmitLogin onClick={() => navigate(ROUTES.SIGN_IN)}>
                {t("Sign in")}
              </SubmitLogin>
            </OptionLogin>
            <div>VisionLab., Inc</div>
          </OptionSubmit>
        </BoxContent>
      </ContainerRegister>

      {/* Dialog VerifyEmail */}
      <EmailSentDialog
        open={openDialogSentEmail}
        onClose={handleClose}
        handleTryAgain={handleTryAgain}
      />
    </WrapperRegister>
  );
}
