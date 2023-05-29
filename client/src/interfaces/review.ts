import { IProduct } from "./product";

export interface IReview {
  _id: string;
  rating: number;
  title: string;
  comment: string;
  user: string;
  product: IProduct;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface GetReview {
  title: string;
  comment: string;
}

export interface PostReview {
  product: string;
  title: string;
  comment: string;
  rating: number;
}
