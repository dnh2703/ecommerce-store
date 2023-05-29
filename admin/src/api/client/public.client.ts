import axios from "axios";
import { useNavigate } from "react-router-dom";

const publicClient = axios.create({
  baseURL: `https://backend-store-ecommerce.onrender.com/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

publicClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 500) {
      const navigate = useNavigate();
      navigate("/error-server");
    }
    return Promise.reject(error);
  }
);

export default publicClient;
