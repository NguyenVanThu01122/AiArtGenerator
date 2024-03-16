import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SentEmailDialog from "../../../../components/SentEmailDialog";
import TextFieldController from "../../../../components/Ui/TextFieldController ";
import ButtonGeneral from "../../../../components/Ui/button";
import CloseButton from "../../../../components/Ui/closeButton";
import ImageGeneral from "../../../../components/Ui/image";
import { TextFieldType } from "../../../../components/Ui/textFieldCommon";
import iconBack from "../../../../images/ic-back.svg";
import iconLogin from "../../../../images/iconLogin.png";
import { forgotPassword } from "../../../../services/auth";
import { validateEmail } from "../../../../utils/validationRules";
import {
  BackToSignIn,
  ContentForgotPassword,
  ContentText,
  DialogPasswordForgot,
  ItemBack,
  ItemHeader,
  PasswordReset,
  TitleForgot,
} from "./styles";
interface FormData {
  Email?: string;
}

export const DialogForgotPassword = ({
  setIsModalPassword,
  isModalPassword,
  setIsForgotPassword,
  isForgotPassword,
}: {
  isForgotPassword: boolean;
  isModalPassword: boolean;
  setIsModalPassword: (value: boolean) => void;
  setIsForgotPassword: (value: boolean) => void;
}) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const handleResetPassword = (value: FormData) => {
    const email = value.Email as string | undefined;
    if (!email) {
      return;
    }
    const body = {
      email,
      redirectUrl: "http://localhost:3000/change-password",
    };
    forgotPassword(body)
      .then((res) => {
        setIsForgotPassword(false);
      })
      .catch((error) => toast.error(error.response.data?.message));
  };

  // hủy bỏ modal quên password
  const CancelModalForgotPassword = () => {
    setIsModalPassword(false);
    setIsForgotPassword(false);
    reset();
  };

  const handleTryAgain = () => setIsForgotPassword(true);

  return (
    <DialogPasswordForgot
      open={isModalPassword}
      onClose={CancelModalForgotPassword}
    >
      <CloseButton handleClose={CancelModalForgotPassword} />
      {isForgotPassword ? (
        <ContentForgotPassword>
          <ItemHeader>
            <ImageGeneral src={iconLogin} alt="" />
            <TitleForgot>Forgot your password?</TitleForgot>
          </ItemHeader>
          <PasswordReset>
            <ContentText>
              Enter your email and we'll send you a link to reset your password
            </ContentText>
            <TextFieldController
              name="Email"
              type={TextFieldType.EMAIL}
              control={control}
              errors={errors}
              fullWidth
              margin="normal"
              defaultValue=""
              variant="outlined"
              rules={validateEmail}
              label="Please enter email address"
            />
            <ButtonGeneral
              className="custom-button"
              onClick={handleSubmit(handleResetPassword)}
            >
              Request Password Reset
            </ButtonGeneral>
          </PasswordReset>
          <ItemBack onClick={CancelModalForgotPassword}>
            <ImageGeneral src={iconBack} alt="" />
            <BackToSignIn>Back to sign in</BackToSignIn>
          </ItemBack>
        </ContentForgotPassword>
      ) : (
        <SentEmailDialog
          open={isModalPassword}
          onClose={CancelModalForgotPassword}
          handleTryAgain={handleTryAgain}
        />
      )}
    </DialogPasswordForgot>
  );
};
