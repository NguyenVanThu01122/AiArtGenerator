import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";
import ImageGeneral from "../../components/Ui/image";
import icBack from "../../images/ic-back.svg";
import iconLogin from "../../images/iconLogin.png";
import CloseButton from "../Ui/closeButton";
import {
  BackSignIn,
  ContentDialog,
  ItemVerifyEmail,
  StyledDialogCommon,
  TitleDialog,
  TryAgain,
} from "./styles";
interface EmailSentDialogProps {
  open: boolean;
  onClose: () => void;
  handleTryAgain?: any;
}
const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function EmailSentDialog({
  open,
  onClose,
  handleTryAgain,
}: EmailSentDialogProps) {
  return (
    <StyledDialogCommon
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      MuiDialog-container
    >
      <ItemVerifyEmail>
        <ImageGeneral className="ic-logo" src={iconLogin} alt="" />
        <TitleDialog>Email Sent</TitleDialog>
        <CloseButton handleClose={onClose} />
        <ContentDialog>
          We've sent you an email with a link to verify your account. Click link
          in email to verify.
        </ContentDialog>
        <TryAgain>
          Wrong email? <span onClick={handleTryAgain}>Try Again</span>
        </TryAgain>
        <BackSignIn onClick={onClose}>
          <ImageGeneral src={icBack} alt="" />
          <div>Back to sign in</div>
        </BackSignIn>
        <div>VisionLab., Inc</div>
      </ItemVerifyEmail>
    </StyledDialogCommon>
  );
}
