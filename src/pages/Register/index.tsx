import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AnimationStar from "../../components/AnimationStar";
import EmailSentDialog from "../../components/SentEmailDialog";
import { SidebarImageLogin } from "../../components/SidebarImageLogin";
import TextFieldController from "../../components/Ui/TextFieldController ";
import ImageGeneral from "../../components/Ui/image";
import { TextFieldType } from "../../components/Ui/textFieldCommon";
import { RegisterType, register } from "../../services/auth";
import {
  imageDiscord,
  imageFacebook,
  imageLogin,
  imagegg,
} from "../../utils/images";
import {
  handleFacebookAuth,
  handleGoogleAuth,
} from "../../utils/redirectToAuthProvider";
import {
  validateEmail,
  validateFirstName,
  validateLastName,
} from "../../utils/validationRules";
import PasswordVisibilityToggle from "../SignIn/components/PasswordVisibilityToggle";
import {
  BoxContent,
  ContainerRegister,
  GroupImageGeneral,
  GroupSpan,
  OptionLogin,
  OptionSubmit,
  SignUpOptions,
  StyledFormControl,
  SubmitLogin,
  SubmitRegister,
  TitleForm,
  WrapperRegister,
} from "./styles";

export default function Register() {
  const navigate = useNavigate();
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
  const password = watch("password");
  const confirm = watch("confirm");

  // hàm xử lý form register
  const handleOnFinishRegister = (value: RegisterType) => {
    const bodyRegister = {
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      password: value.password,
      redirectUrl: "http://localhost:3000/verify-register",
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
      <SidebarImageLogin />
      {/* content Register */}
      <ContainerRegister>
        <BoxContent>
          <SignUpOptions>
            <ImageGeneral className="logo-login" src={imageLogin} />
            <TitleForm>Sign up to your account</TitleForm>
            <GroupImageGeneral>
              <ImageGeneral
                className="icon-google"
                onClick={handleGoogleAuth}
                src={imagegg}
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
              <span>OR</span>
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
              label="First Name"
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
              label="Last Name"
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
              label="Email"
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
              label="Password"
              fullWidth
              margin="normal"
              variant="outlined"
              errors={errors}
              type={showPassword ? TextFieldType.TEXT : TextFieldType.PASSWORD}
              InputProps={{
                endAdornment: (
                  <PasswordVisibilityToggle
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                  />
                ),
              }}
              rules={{
                required: "Please enter your password!",
                minLength: {
                  value: 6,
                  message: "Password must be at least eight characters!",
                },
                validate: (value: string) =>
                  value === confirm || "Passwords do not match",
              }}
            />
            <TextFieldController
              name="confirm"
              control={control}
              defaultValue=""
              label="Confirm Password"
              fullWidth
              margin="normal"
              variant="outlined"
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
                required: "Please confirm your password!",
                validate: (value: string) =>
                  value === password || "Passwords do not match",
              }}
            />
          </StyledFormControl>
          <OptionSubmit>
            <SubmitRegister onClick={handleSubmit(handleOnFinishRegister)}>
              Sign up
            </SubmitRegister>
            <OptionLogin>
              <div>Don't have an account?</div>
              <SubmitLogin onClick={() => navigate("/sign-in")}>
                Sign in
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
