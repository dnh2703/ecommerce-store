import {
  IForgotPassword,
  ILoginForm,
  IRegisterForm,
  IResetPassword,
  IVerifyEmail,
} from "../interfaces/auth";
import privateClient from "./client/private.client";
import publicClient from "./client/public.client";

const authApi = {
  register: (data: IRegisterForm) => publicClient.post("auth/register", data),
  login: (data: ILoginForm) => publicClient.post("auth/login", data),
  logout: () => privateClient.get("auth/logout"),
  verifyEmail: (data: IVerifyEmail) =>
    publicClient.post(`auth/verify-email`, data),
  forgotPassword: (data: IForgotPassword) =>
    publicClient.post(`auth/forgot-password`, data),
  resetPassword: (data: IResetPassword) =>
    publicClient.post(`auth/reset-password`, data),
  refreshToken: (token?: string) =>
    publicClient.post("auth/token", { refreshToken: token }),
};

export default authApi;
