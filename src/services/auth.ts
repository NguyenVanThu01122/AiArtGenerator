import { APIs } from "./configs/api";
import { privateAxios } from "./configs/axios";

export interface RegisterType {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string | number;
  redirectUrl?: string;
  confirm?: number;
}

export interface FormValues {
  email?: string;
  password?: string;
}

export interface FormForgotPassword {
  email: string;
  redirectUrl: string;
}
export const register = (bodyRegister: RegisterType) =>
  privateAxios.post(APIs.REGISTER, bodyRegister);

export const login = (bodyLogin: FormValues) =>
  privateAxios.post(APIs.LOGIN, bodyLogin);

export const forgotPassword = (body: FormForgotPassword) =>
  privateAxios.post(APIs.FORGET_PASSWORD, body);

export const verifytoken = (token: string) =>
  privateAxios.get(`${APIs.VERIFY}/${token}`);

export const generateNewToken = () =>
  privateAxios.post(APIs.GENERATE_NEW_TOKEN);
