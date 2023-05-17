import { IProduct } from "../interfaces/product";
import axiosConfig from "./axiosConfig";

const productApi = {
  deleteProduct: (id: string) => axiosConfig.delete(`products/${id}`),
  createProduct: (data: IProduct) => axiosConfig.post("/products", data),
  getAllProducts: () => axiosConfig.get("/products"),
  getSingleProduct: (id: string) => axiosConfig.get(`/products/${id}`),
  updateProduct: (id: string, data: IProduct) =>
    axiosConfig.patch(`/products/${id}`, data),
};

export default productApi;
