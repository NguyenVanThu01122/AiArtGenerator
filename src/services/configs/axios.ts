import axios from "axios";
import { toast } from "react-toastify";
import {
  removeRefreshToken,
  removeToken,
  saveRefreshTokenLocalStorage,
  saveTokenLocalStorage,
} from "../../utils/handleTokenUtils";
import { generateNewToken } from "../auth";

const privateAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 4000,
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
});

privateAxios.interceptors.request.use(
  (config) => {
    if (localStorage.getItem("token")) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

privateAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      generateNewToken()
        .then((res) => {
          saveTokenLocalStorage("token", res.data?.token);
          saveRefreshTokenLocalStorage("refreshToken", res.data?.refreshToken);
          window.location.reload();
        })
        .catch((error) => {
          removeToken();
          removeRefreshToken();
          toast.error("Token expired, please login again");
          window.location.assign("/sign-in");
        });
    }

    return Promise.reject(error);
  }
);

export { privateAxios };
