import axios from "axios";

const publicClient = axios.create({
  baseURL: `https://backend-store-ecommerce.onrender.com/api/v1/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default publicClient;
