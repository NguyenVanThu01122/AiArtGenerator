import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { saveUser } from "../reduxToolkit/Slices/AppSlice";
import { RootState } from "../reduxToolkit/Slices/RootReducer";
import { getUsers } from "../services/user";
import { ERROR_MESSAGES } from "./constants";
import { useTranslation } from "react-i18next";

export const useGetInfoUser = () => {
  const login = useSelector((state: RootState) => state.app.login);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // lấy user
  const getUser = () => {
    getUsers()
      .then((res) => {
        dispatch(saveUser(res.data?.data));
      })
      .catch((error) => toast.error(t(ERROR_MESSAGES.SERVER_ERROR)));
  };

  useEffect(() => {
    if (login) {
      getUser();
    }
  }, []);

  return [getUser];
};
