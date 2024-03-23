import { Checkbox } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AnimationStar from "../../components/AnimationStar";
import { SidebarImageLogin } from "../../components/SidebarImageLogin";
import TextFieldController from "../../components/Ui/TextFieldController ";
import ImageGeneral from "../../components/Ui/image";
import { TextFieldType } from "../../components/Ui/textFieldCommon";
import { saveLogin, saveToken } from "../../redux/Actions/app";
import { FormValues, login } from "../../services/auth";
import { SUCCESS_MESSAGE } from "../../utils/constants";
import {
  saveRefreshTokenLocalStorage,
  saveTokenLocalStorage,
} from "../../utils/handleTokenUtils";
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
import { validateEmail, validatePassword } from "../../utils/validationRules";
import { DialogForgotPassword } from "./components/DialogForgotPassword";
import PasswordVisibilityToggle from "./components/PasswordVisibilityToggle";
import {
  BoxSignIn,
  ContentSignIn,
  ForgotPassword,
  GroupImageGeneral,
  GroupSpan,
  OptionItem,
  RedirectSignOut,
  Register,
  SignInOptions,
  StyledFormControl,
  StyledFormControlLabel,
  StyledFormGroup,
  SubmitItem,
  SubmitSignIn,
  TitleForm,
  WrapperSignIn,
} from "./styles";

export function SignIn() {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isModalPassword, setIsModalPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  // hàm xử lý form login
  const handleOnFinishLogin = (value: FormValues) => {
    if (!value) {
      return;
    }
    const bodyLogin = {
      email: value?.email,
      password: value?.password,
    };
    login(bodyLogin)
      .then((res) => {
        dispatch(saveLogin(true));
        dispatch(saveToken(res.data?.token));
        saveTokenLocalStorage("token", res.data?.token);
        saveRefreshTokenLocalStorage("token", res.data?.refreshToken);
        navigate("/");
        toast.error(SUCCESS_MESSAGE.SUCCESS_LOGIN);
        reset();
      })
      .catch((error) => toast.error(error.response?.data?.message));
  };

  // mở modal quên password
  const showModalForgotPassword = () => {
    setIsModalPassword(true);
    setIsForgotPassword(true);
  };

  return (
    <WrapperSignIn>
      <AnimationStar />
      {isModalPassword && <div className="empty-div"></div>}
      <SidebarImageLogin />
      <BoxSignIn>
        <ContentSignIn>
          <SignInOptions>
            <ImageGeneral className="icon-login" src={imageLogin} alt="" />
            <TitleForm>Sign in to your account</TitleForm>
            <GroupImageGeneral>
              <ImageGeneral
                className="icon-google"
                onClick={handleGoogleAuth}
                src={imagegg}
                alt=""
              />
              <ImageGeneral
                className="icon-discord"
                src={imageDiscord}
                alt=""
              />
              <ImageGeneral
                className="icon-facebook"
                onClick={handleFacebookAuth}
                src={imageFacebook}
                alt=""
              />
            </GroupImageGeneral>
            <GroupSpan>
              <span></span>
              <span>OR</span>
              <span></span>
            </GroupSpan>
          </SignInOptions>

          {/* form login */}
          <StyledFormControl fullWidth>
            <StyledFormGroup>
              <TextFieldController
                name="email"
                type={TextFieldType.EMAIL}
                control={control}
                errors={errors}
                label="Email"
                fullWidth
                margin="normal"
                defaultValue=""
                variant="outlined"
                rules={validateEmail}
              />
              <TextFieldController
                name="password"
                type={
                  showPassword ? TextFieldType.TEXT : TextFieldType.PASSWORD
                }
                control={control}
                errors={errors}
                label="Password"
                fullWidth
                margin="normal"
                defaultValue=""
                variant="outlined"
                rules={validatePassword}
                InputProps={{
                  endAdornment: (
                    <PasswordVisibilityToggle
                      showPassword={showPassword}
                      setShowPassword={setShowPassword}
                    />
                  ),
                }}
              />
            </StyledFormGroup>
            <OptionItem>
              <StyledFormControlLabel
                required
                label="Remember me !"
                control={<Checkbox />}
              />
              <ForgotPassword onClick={showModalForgotPassword}>
                Forgot Password?
              </ForgotPassword>
            </OptionItem>
            <SubmitItem>
              <SubmitSignIn onClick={handleSubmit(handleOnFinishLogin)}>
                Sign in
              </SubmitSignIn>
              <RedirectSignOut>
                <div>Don't have an account?</div>
                <Register onClick={() => navigate("/register")}>
                  Register
                </Register>
                ForgotPassword
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
  );
}
