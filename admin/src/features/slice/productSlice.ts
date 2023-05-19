import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/product";

interface ProductState {
  products: IProduct[];
  loading: boolean;
  error: boolean;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductsStart: (state) => {
      state.loading = true;
    },
    getProductsSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    getProductsFailure: (state) => {
      state.loading = false;
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
    toggleSortProductAction : (state,action) => {
      
    }
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
