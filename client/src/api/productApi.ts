import axiosConfig from "./axiosConfig";

const productApi = {
  getProductDetail: (id: any) => {
    return axiosConfig.get(`/products/${id}`);
  },
  getAllProducts: (name = "") => {
    return axiosConfig.get(`/products?name=${name}`);
  },
};

export default productApi;
