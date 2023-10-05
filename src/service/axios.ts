import axios from "axios";

const publicAxios = axios.create({
  baseURL: "http://localhost:9090",
  timeout: 4000,
});

const privateAxios = axios.create({
  baseURL: "http://localhost:9090",
  timeout: 4000,
});

// Buoc 1: Duoc chay truoc khi gui api len backend
privateAxios.interceptors.request.use(
  (config) => {
    // lam cai gi do truoc khi gui api len backend
    // config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;

    // {
    //   baseURL: 'http://localhost:3030', // cổng 3030 là cổng chạy local của backend
    //   timeout: 4000,
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('token')}`
    //   }
    // }

    return config; // cú pháp cố định
  },
  (error) => Promise.reject(error)
);

// Buoc 2: Gui api len backend

// Buoc 3: Duoc chay sau khi nhan du lieu thanh cong tu backend
privateAxios.interceptors.response.use(
  (response) => {
    // lam cai gi do voi du lieu nhan duoc
    return response;
  },
  (error) => {
    Promise.reject(error);
  }
);

export { privateAxios, publicAxios };
