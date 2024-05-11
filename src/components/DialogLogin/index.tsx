import { DialogActions, DialogTitle } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Transition } from "../SentEmailDialog";
import ButtonGeneral from "../Ui/button";
import CloseButton from "../Ui/closeButton";
import { StyledDialogCommon } from "./styles";
import { saveDialogLogin } from "../../redux/Slices/AppSlice";
export default function DialogLoin({ dialogLogin }: { dialogLogin: boolean }) {
  const { t } = useTranslation();
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
      <DialogTitle>{t("Please log in to use the service")}</DialogTitle>
      <DialogActions>
        <ButtonGeneral
          i18nKey="LOG_IN"
          className="btn-login"
          onClick={() => navigate("/sign-in")}
        />

        <ButtonGeneral
          i18nKey="Cancel"
          className="btn-cancel"
          onClick={cancelDialogLogin}
        />
      </DialogActions>
    </StyledDialogCommon>
  );
}
