import { AxiosResponse } from "axios";
import { IOrderResponse } from "../../interfaces/order";
import privateClient from "../client/private.client";

const orderApi = {
  getAllOrders: () => privateClient.get("/orders"),
  getSingleOrder: (id?: string): Promise<AxiosResponse<IOrderResponse>> =>
    privateClient.get(`/orders/${id}`),
};

export default orderApi;
