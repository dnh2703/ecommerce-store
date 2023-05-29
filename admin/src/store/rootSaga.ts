import { all } from "redux-saga/effects";
import productSaga from "../features/saga/productSaga";
import userSaga from "../features/saga/userSaga";
import orderSaga from "../features/saga/orderSaga";

export default function* rootSaga() {
  yield all([productSaga(),userSaga(),orderSaga()]);
}
