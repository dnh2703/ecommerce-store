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

interface IProductsData {
  products: IProduct[];
  count: number;
}
interface IProductData {
  product: IProduct;
 
}
export type { IProduct, IProductData,IProductsData };
