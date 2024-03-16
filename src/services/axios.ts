import axios from "axios";

const privateAxios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  // baseURL: "http://localhost:9090",
  timeout: 4000,
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
});

// Buoc 1: Duoc chay truoc khi gui api len backend
privateAxios.interceptors.request.use(
  (config) => {
    //lam cai gi do truoc khi gui api len backend
    if (localStorage.getItem("token")) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    }
    return config; // cú pháp cố định
  },
  (error) => Promise.reject(error)
);

// Buoc 2: Gui api len backend
// Buoc 3: Duoc chay sau khi nhan duoc phan hoi tu backend
privateAxios.interceptors.response.use(
  (response) => {
    // lam cai gi do voi du lieu nhan duoc
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      privateAxios
        .post("/auth/generate-new-token")
        .then((res) => {
          localStorage.setItem("token", res.data?.token);
          localStorage.setItem("refreshToken", res.data?.refreshToken);
          window.location.reload();
        })
        .catch((error) => {
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          window.location.assign("/sign-in");
        });
    }

    return Promise.reject(error);
  }
);

export { privateAxios };
