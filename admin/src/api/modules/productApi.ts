import { AxiosResponse } from "axios";
import { IProduct } from "../../interfaces/product";
import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const productApi = {
  deleteProduct: (id: string) => privateClient.delete(`products/${id}`),
  createProduct: (data: IProduct) => privateClient.post("/products", data),
  getAllProducts: () => publicClient.get("/products"),
  getSingleProduct: (id?: string) => privateClient.get(`/products/${id}`),
  updateProduct: (id?: string, data?: IProduct) =>
    privateClient.patch(`/products/${id}`, data),
};

export default productApi;
