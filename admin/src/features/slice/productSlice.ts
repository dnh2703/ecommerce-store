import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/product";

interface ProductState {
  products: IProduct[];
  productsFilter: IProduct[];
  isLoading: boolean;
  error: boolean;
  filterCategories: string[];
}

const initialState: ProductState = {
  products: [],
  productsFilter: [],
  isLoading: false,
  error: false,
  filterCategories: [],
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
      state.productsFilter = action.payload;
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
    filterCategoriesAction: (state, action) => {
      state.filterCategories = action.payload;

      state.productsFilter = state.products.filter((product) =>
        state.filterCategories.includes(product.category)
      );

      if (action.payload.length === 0) {
        state.productsFilter = [...state.products];
      }
    },
    toggleSortByNumberAction: (state,action) => {

    }
  },
});

export const {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
  deleteProductAction,
  filterCategoriesAction,
} = productSlice.actions;

const productReducer = productSlice.reducer;
export default productReducer;
