import {
  IForgotPassword,
  ILoginForm,
  IResetPassword,
} from "../../interfaces/auth";
import publicClient from "../client/public.client";
import privateClient from "../client/private.client";

const authApi = {
  login: (params: ILoginForm) => publicClient.post("auth/login", params),
  logout: () => privateClient.get("auth/logout"),
  forgotPassword: (params: IForgotPassword) =>
    publicClient.post(`auth/forgot-password`, params),
  resetPassword: (params: IResetPassword) =>
    publicClient.post(`auth/reset-password`, params),
};

export default authApi;
