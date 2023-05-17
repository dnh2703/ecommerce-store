interface IProduct {
  _id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
  category: string;
  company: string;
  colors?: string[];
  featured?: boolean;
  freeShipping?: boolean;
  inventory?: number;
  averageRating?: number;
  numOfReviews?: number;
  user?: string;
}

interface IProductData {
  products: IProduct[];
  count: number;
}
export type { IProduct, IProductData };
