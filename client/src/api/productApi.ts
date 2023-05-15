import axiosConfig from "./axiosConfig";

const productApi = {
  getAllProducts: () => {
    return axiosConfig.get("http://localhost:5000/api/v1/products");
  },
  getProductDetail: (id: any) => {
    return axiosConfig.get(`http://localhost:5000/api/v1/products/${id}`);
  },
};

export default productApi;
