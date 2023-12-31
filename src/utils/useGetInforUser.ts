import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveUser } from "../redux/Actions/app";
import { privateAxios } from "../service/axios";

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
      .catch((error) => {});
  };

  useEffect(() => {
    if (login) {
      getUser();
    }
  }, [login]);

  return [getUser];
};
