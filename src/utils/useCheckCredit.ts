import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../routes/routes";
import { INSUFFICIENT_CREDITS_MESSAGE } from "./constants"; // Đảm bảo import INSUFFICIENT_CREDITS_MESSAGE từ constants.js hoặc messages.js

export const useCheckCredit = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleCheckCredit = (userCredits: number, minCredit: number) => {
    if (userCredits < minCredit) {
      toast.warning(t(INSUFFICIENT_CREDITS_MESSAGE));
      navigate(ROUTES.PRICING);
      return true;
    } else {
      return false;
    }
  };
  return { handleCheckCredit };
};
