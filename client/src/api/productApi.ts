import publicClient from "./client/public.client";

const productApi = {
  getProductDetail: (id: any) => {
    return publicClient.get(`/products/${id}`);
  },
  getAllProducts: (name = "") => {
    return publicClient.get(`/products?name=${name}`);
  },
};

export default productApi;
