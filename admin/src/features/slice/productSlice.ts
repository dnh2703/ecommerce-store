import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/product";

interface ProductState {
  products: IProduct[];
  isLoading: boolean;
  error: boolean;
}

const initialState: ProductState = {
  products: [],
  isLoading: false,
  error: false,
};

const productSlice = createSlice({
  name: "product",
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
    deleteProductAction: (state, action) => {
      const index = state.products.findIndex(
        (product) => product._id === action.payload
      );
      if (index !== -1) {
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
      }
    },
    toggleSortProductAction: (state, action) => {},
  },
});

export const {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
  deleteProductAction,
} = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
