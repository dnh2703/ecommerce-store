import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { IProduct, WishListProducts } from "../../interfaces/product";
import productApi from "../../api/productApi";
import { IReview } from "../../interfaces/review";

// Define a type for the slice state
interface ProductState {
  wishListProducts: WishListProducts[];
  products: IProduct[];
  isLoading: boolean;
  error: boolean;
}

// Define the initial state using that type
const initialState: ProductState = {
  wishListProducts: [],
  products: [],
  isLoading: false,
  error: false,
};

export const productSlice = createSlice({
  name: "product",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.isLoading = true;
    },
    getProductsSuccess: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    getProductsFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    getWishListProduct: (state, actions) => {
      state.wishListProducts.push(actions.payload);
    },
  },
});

export const {
  getProductsStart,
  getProductsFailure,
  getProductsSuccess,
  getWishListProduct,
} = productSlice.actions;

export default productSlice.reducer;
