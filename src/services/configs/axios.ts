import axios from "axios";
import { toast } from "react-toastify";
import { generateNewToken } from "../auth";

const privateAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 4000,
  // baseURL: "http://localhost:9090",
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
          localStorage.setItem("token", res.data?.token);
          localStorage.setItem("refreshToken", res.data?.refreshToken);
          window.location.reload();
        })
        .catch((error) => {
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          toast.error("Token expired, please login again");
          // window.location.assign("/sign-in");
        });
    }

    return Promise.reject(error);
  }
);

export { privateAxios };
