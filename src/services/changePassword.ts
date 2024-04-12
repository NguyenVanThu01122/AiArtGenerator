import { APIs } from "./configs/api";
import { privateAxios } from "./configs/axios";

export const changePassword = (body: { token: string; password: number }) =>
  privateAxios.post(APIs.CHANGE_PASSWORD, body);
