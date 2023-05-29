import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../../interfaces/order";

interface OrderState {
  orders: IOrder[];
  isLoading: boolean;
  error: boolean;
}

const initialState: OrderState = {
  orders: [],
  isLoading: false,
  error: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrdersStart: (state) => {
      state.isLoading = true;
    },
    getOrdersSuccess: (state, action) => {
      state.isLoading = false;
      state.orders = action.payload;
    },
    getOrdersFailure: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { getOrdersFailure, getOrdersStart, getOrdersSuccess } =
  orderSlice.actions;

const orderReducer = orderSlice.reducer;

export default orderReducer;
