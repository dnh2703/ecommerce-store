import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: true,
  
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const {} = productSlice.actions

export const productReducer = productSlice.reducer;
