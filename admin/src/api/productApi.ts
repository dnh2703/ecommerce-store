import axiosConfig from "./axiosConfig";

const productApi = {
  getAllProducts: () => axiosConfig.get("/products"),
};

export default productApi;
