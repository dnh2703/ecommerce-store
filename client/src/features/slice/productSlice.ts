import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { IProduct, CartListProducts } from "../../interfaces/product";
import productApi from "../../api/productApi";
import { IReview } from "../../interfaces/review";

// Define a type for the slice state
interface ProductState {
  cartProducts: CartListProducts[];
  products: IProduct[];
  isLoading: boolean;
  error: boolean;
}

// Define the initial state using that type
const initialState: ProductState = {
  cartProducts: [],
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
    getCartProduct: (state, actions) => {
      state.cartProducts = actions.payload;
    },
    addToCart: (state, actions) => {
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.product.id === actions.payload.product.id
      );
      if (itemIndex >= 0) {
        state.cartProducts[itemIndex].quantity += actions.payload.count;
      } else {
        const tempProducts = { ...actions.payload };
        state.cartProducts.push(tempProducts);
      }
    },
  },
});

export const {
  getProductsStart,
  getProductsFailure,
  getProductsSuccess,
  getCartProduct,
  addToCart,
} = productSlice.actions;

export default productSlice.reducer;
