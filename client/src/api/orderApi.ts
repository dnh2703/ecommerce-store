import { Order } from "../interfaces/order";
import privateClient from "./client/private.client";

const orderApi = {
  createOrder: (body: Order) => {
    return privateClient.post("/orders", body);
  },
};

export default orderApi;
