interface IOrderItem {
  name: string;
  image: string;
  price: number;
  amount: number;
  product: string;
  _id: string;
}

interface IOrder {
  _id: string;
  tax: number;
  shippingFee: number;
  subtotal: number;
  total: number;
  orderItems: IOrderItem[];
  status: string;
  user: string;
  userName: string;
  email: string;
  address: string;
  clientSecret: string;
  createdAt: string;
  updatedAt: string;
}

interface IOrderData {
  orders: IOrder[];
  count: number;
}

export type { IOrder, IOrderData, IOrderItem };
