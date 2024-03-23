import { DialogActions, DialogTitle } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Transition } from "../../../../components/SentEmailDialog";
import ButtonGeneral from "../../../../components/Ui/button";
import CloseButton from "../../../../components/Ui/closeButton";
import { StyledDialogCommon } from "./styles";

export default function DialogLoin({
  setIsLoginNotification,
  isLoginNotification,
}: {
  isLoginNotification: boolean;
  setIsLoginNotification: (value: boolean) => void;
}) {
  const navigate = useNavigate();
  const cancelModalNotification = () => {
    setIsLoginNotification(false);
  };
  return (
    <StyledDialogCommon
      open={isLoginNotification}
      onClose={cancelModalNotification}
      TransitionComponent={Transition}
    >
      <CloseButton handleClose={cancelModalNotification} />
      <DialogTitle>Please log in to use the service</DialogTitle>
      <DialogActions>
        <ButtonGeneral
          className="btn-login"
          onClick={() => navigate("/sign-in")}
        >
          Log In
        </ButtonGeneral>
        <ButtonGeneral className="btn-cancel" onClick={cancelModalNotification}>
          Cancel
        </ButtonGeneral>
      </DialogActions>
    </StyledDialogCommon>
  );
}
