import { call, put, takeEvery } from "redux-saga/effects";
import orderApi from "../../api/modules/orderApi";
import { AxiosResponse } from "axios";
import { IOrderData } from "../../interfaces/order";
import {
  getOrdersFailure,
  getOrdersStart,
  getOrdersSuccess,
} from "../slice/orderSlice";

function* getOrders() {
  try {
    const res: AxiosResponse<IOrderData> = yield call(orderApi.getAllOrders);
    yield put(getOrdersSuccess(res.data.orders));
  } catch (error) {
    yield put(getOrdersFailure());
  }
}

function* orderSaga() {
  yield takeEvery(getOrdersStart, getOrders);
}

export default orderSaga;
