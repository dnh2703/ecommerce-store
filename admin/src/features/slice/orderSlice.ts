import { createSlice } from "@reduxjs/toolkit";
import { IOrder } from "../../interfaces/order";

interface OrderState {
  orders: IOrder[];
  loading: boolean;
  error: boolean;
}

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: false,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    getOrdersStart: (state) => {
      state.loading = true;
    },
    getOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    getOrdersFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getOrdersFailure, getOrdersStart, getOrdersSuccess } =
  orderSlice.actions;

const orderReducer = orderSlice.reducer;

export default orderReducer;
