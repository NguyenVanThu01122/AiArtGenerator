import { privateAxios } from "./axios";

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
  privateAxios.post("/auth/create", bodyRegister);

export const login = (bodyLogin: FormValues) =>
  privateAxios.post("/auth/login", bodyLogin);

export const forgotPassword = (body: FormForgotPassword) =>
  privateAxios.post("/auth/forget-password", body);

export const verifytoken = (searchParams: any) =>
  privateAxios.get(`/auth/verify/${searchParams.get("token")}`);
