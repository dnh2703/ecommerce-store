import { CartListProducts } from "./product";

export interface Order {
  tax: number;
  shippingFee: number;
  address: string;
  items: OrderItem[];
}

export interface OrderItem {
  product: string;
  amount: number;
}
