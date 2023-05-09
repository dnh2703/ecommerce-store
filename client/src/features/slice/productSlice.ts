import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

// Define a type for the slice state
interface ProductState {}

// Define the initial state using that type
const initialState: ProductState = {};

export const productSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
});

export const {} = productSlice.actions;

export default productSlice.reducer;
