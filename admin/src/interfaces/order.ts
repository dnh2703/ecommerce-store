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
  clientSecret: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface IOrderData {
  orders: IOrder[];
  count: number;
}

export type { IOrder, IOrderData, IOrderItem };
