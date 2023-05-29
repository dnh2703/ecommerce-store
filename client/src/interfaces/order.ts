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
  image?: string;
  name?: string;
  price?: number;
}

export interface CustomerOrders {
  address: string;
  clientSecret: string;
  createdAt: string;
  email: string;
  orderItems: OrderItem[];
  shippingFee: number;
  status: string;
  subtotal: number;
  tax: number;
  total: number;
  _id: string;
  user: string;
  username: string;
}
