import { APIs } from "./configs/api";
import { privateAxios } from "./configs/axios";

export const getUsers = () => privateAxios.get(APIs.GET_USER_PROFILE);
