import axiosConfig from "./axiosConfig";

const productApi = {
  getProductDetail: (id: any) => {
    return axiosConfig.get(`/products/${id}`);
  },
  getAllProducts: () => {
    return axiosConfig.get(`/products`);
  },
};

export default productApi;
