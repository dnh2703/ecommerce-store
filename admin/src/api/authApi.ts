import axiosConfig from "./axiosConfig";
import {
  IForgotPassword,
  ILoginForm,
  IResetPassword,
} from "../interfaces/auth";

const authApi = {
  login: (params: ILoginForm) => axiosConfig.post("auth/login", params),
  logout: () => axiosConfig.get("auth/logout"),
  forgotPassword: (params: IForgotPassword) =>
    axiosConfig.post(`auth/forgot-password`, params),
  resetPassword: (params: IResetPassword) =>
    axiosConfig.post(`auth/reset-password`, params),
  adminAuth: () => axiosConfig.get(`auth/admin-auth`),
};

export default authApi;
