import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { saveUser } from "../redux/Actions/app";
import { privateAxios } from "../services/axios";
import { ERROR_MESSAGES } from "./constants";

export const useGetInforUser = () => {
  const login = useSelector((state: any) => state.app.login);
  const dispatch = useDispatch();

  // lấy user
  const getUser = () => {
    privateAxios
      .get("/user/profile")
      .then((res) => {
        dispatch(saveUser(res.data?.data));
      })
      .catch((error) => toast.error(ERROR_MESSAGES.SERVER_ERROR));
  };

  useEffect(() => {
    if (login) {
      getUser();
    }
  }, [login]);

  return [getUser];
};
