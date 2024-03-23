import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { saveUser } from "../reduxToolkit/Slices/AppSlice";
import { getUsers } from "../services/user";
import { ERROR_MESSAGES } from "./constants";

export const useGetInfoUser = () => {
  const login = useSelector((state: any) => state.app.login);
  const dispatch = useDispatch();

  // lấy user
  const getUser = () => {
    getUsers()
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
