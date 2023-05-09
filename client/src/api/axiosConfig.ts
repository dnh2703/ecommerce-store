import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "/api/v1/",
  headers: { "Content-Type": "application/json" },
});

export default axiosConfig;
