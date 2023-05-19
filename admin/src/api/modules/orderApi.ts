import privateClient from "../client/private.client";

const orderApi = {
  getAllOrders: () => privateClient.get("/orders"),
  getSingleOrder: (id?: string) => privateClient.get(`/orders/${id}`),
};

export default orderApi;
