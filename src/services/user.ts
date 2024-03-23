import { privateAxios } from "./axios";

export const getUsers = () => privateAxios.get("/user/profile");
