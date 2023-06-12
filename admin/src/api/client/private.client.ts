import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";
import {
  isTokenExpired,
  refreshAccessToken,
  removeToken,
  updateAccessToken,
} from "../../utils/setting/config";
import { useNavigate } from "react-router-dom";

const privateClient: AxiosInstance = axios.create({
  baseURL: `https://backend-store-ecommerce.onrender.com/api/v1/`,
});

privateClient.interceptors.request.use(
  async (config: any) => {
    const accessToken = Cookies.get("accessToken");
    const refreshToken = Cookies.get("refreshToken");

    if (
      accessToken &&
      refreshToken &&
      !isTokenExpired(accessToken) &&
      !isTokenExpired(refreshToken)
    ) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      };
    } else {
      try {
        const refreshedToken = await refreshAccessToken();

        updateAccessToken(refreshedToken);

        config.headers = {
          Authorization: `Bearer ${refreshedToken}`,
          "Content-Type": "application/json",
        };
      } catch (err) {
        const navigate = useNavigate();
        removeToken();
        navigate("/");
        return Promise.reject(err);
      }
    }
    return config;
  },
  function (err) {
    const navigate = useNavigate();
    removeToken();
    navigate("/");
    return Promise.reject(err);
  }
);

privateClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 500) {
      const navigate = useNavigate();
      navigate("/error-server");
    }
    return Promise.reject(error);
  }
);

export default privateClient;
