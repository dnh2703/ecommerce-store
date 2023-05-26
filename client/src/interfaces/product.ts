import { IReview } from "./review";

interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  company: string;
  colors: string[];
  featured: boolean;
  freeShipping: boolean;
  inventory: number;
  averageRating: number;
  numOfReviews: number;
  user: string;
  createdAt: string;
  updatedAt: string;
  review?: IReview[];
}

export interface IProductLayout {
  quickView?: () => void;
  product: IProduct;
  cols: number;
  reset?: any;
}

export interface ISideFilter {}

export interface IBrand {
  id: number;
  checked: boolean;
  label: string;
}

export interface ClearFilterProduct {
  collection: string;
  isInStock: boolean;
  isOutOfStock: boolean;
  resetCollection: any;
  isPriceChange: boolean;
  brands: IBrand[];
  resetInStock: () => void;
  resetIsOutOfStock: () => void;
  resetAll: () => void;
  resetPrice: () => void;
  resetBrand: (id: number) => void;
  price: number[];
}

export interface CartListProducts {
  product: IProduct;
  quantity: number;
}
export type { IProduct };
