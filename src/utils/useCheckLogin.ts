import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../reduxToolkit/Slices/RootReducer";

export const useCheckLogin = () => {
  const navigate = useNavigate();
  const login = useSelector((state: RootState) => state.app.login);

  const checkLogin = () => {
    if (!login) {
      navigate("/sign-in");
    }
  };

  return [login, checkLogin];
};
