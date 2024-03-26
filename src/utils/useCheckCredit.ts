import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ROUTES } from "../routes/routes";
import { INSUFFICIENT_CREDITS_MESSAGE } from "./constants"; // Đảm bảo import INSUFFICIENT_CREDITS_MESSAGE từ constants.js hoặc messages.js

export const useCheckCredit = () => {
  const navigate = useNavigate();
  const handleCheckCredit = (userCredits: number, minCredit: number) => {
    if (userCredits < minCredit) {
      toast.warning(INSUFFICIENT_CREDITS_MESSAGE);
      navigate(ROUTES.PRICING);
      return true;
    } else {
      return false;
    }
  };
  return { handleCheckCredit };
};
