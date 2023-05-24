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
  register: (params: IRegisterForm) =>
    publicClient.post("auth/register", params),
  login: (params: ILoginForm) => publicClient.post("auth/login", params),
  logout: () => privateClient.get("auth/logout"),
  verifyEmail: ({ email, verificationToken }: IVerifyEmail) =>
    publicClient.post(
      `auth/verify-email?token=${verificationToken}&email=${email}`
    ),
  forgotPassword: (params: IForgotPassword) =>
    publicClient.post(`auth/forgot-password`, params),
  resetPassword: (params: IResetPassword) =>
    publicClient.post(`auth/reset-password`, params),
  refreshToken: (token?: string) =>
    publicClient.post("auth/token", { refreshToken: token }),
};

export default authApi;
