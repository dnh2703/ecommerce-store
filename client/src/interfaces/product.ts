interface IProduct {
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
  __v: number;
  id: string;
}

export interface IFilterProducts {
  collection: string;
  availability: string;
  brand: string;
  price: boolean;
}

export interface IProductLayout {
  product: IProduct;
  cols?: number;
}

export interface ISideFilter {
  names: string[];
  products: IProduct[];
  filter: string;
  onclick: any;
}

export interface ProductDetailProps {
  product: IProduct;
  showModal: () => void;
}

export interface Modal {
  closeModal: () => void;
  product?: IProduct;
}

export type { IProduct };
