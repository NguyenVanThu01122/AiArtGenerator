import { DialogActions, DialogTitle } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveDialogLogin } from "../../reduxToolkit/Slices/AppSlice";
import { Transition } from "../SentEmailDialog";
import ButtonGeneral from "../Ui/button";
import CloseButton from "../Ui/closeButton";
import { StyledDialogCommon } from "./styles";
export default function DialogLoin({ dialogLogin }: { dialogLogin: boolean }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cancelDialogLogin = () => dispatch(saveDialogLogin(false));

  return (
    <StyledDialogCommon
      open={dialogLogin}
      onClose={cancelDialogLogin}
      TransitionComponent={Transition}
    >
      <CloseButton handleClose={cancelDialogLogin} />
      <DialogTitle>Please log in to use the service</DialogTitle>
      <DialogActions>
        <ButtonGeneral
          className="btn-login"
          onClick={() => navigate("/sign-in")}
        >
          Log In
        </ButtonGeneral>
        <ButtonGeneral className="btn-cancel" onClick={cancelDialogLogin}>
          Cancel
        </ButtonGeneral>
      </DialogActions>
    </StyledDialogCommon>
  );
}
