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
}

export interface IProductLayout {
  product: IProduct;
  cols: number;
}

export interface ISideFilter {}

export type { IProduct };
