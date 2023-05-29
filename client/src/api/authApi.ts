import axiosConfig from "./axiosConfig";
import {
  IForgotPassword,
  ILoginForm,
  IRegisterForm,
  IResetPassword,
  IVerifyEmail,
} from "../interfaces/auth";

const authApi = {
  register: (params: IRegisterForm) =>
    axiosConfig.post("auth/register", params),
  login: (params: ILoginForm) => axiosConfig.post("auth/login", params),
  logout: () => axiosConfig.get("auth/logout"),
  verifyEmail: ({ email, verificationToken }: IVerifyEmail) =>
    axiosConfig.post(
      `auth/verify-email?token=${verificationToken}&email=${email}`
    ),
  forgotPassword: (params: IForgotPassword) =>
    axiosConfig.post(`auth/forgot-password`, params),
  resetPassword: (params: IResetPassword) =>
    axiosConfig.post(`auth/reset-password`, params),
  jwtAuth: () => axiosConfig.get(`auth/jwt-auth`),
};

export default authApi;
