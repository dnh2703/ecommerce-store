import { all } from "redux-saga/effects";
import authSaga from "../features/saga/productSaga";
import productSaga from "../features/saga/productSaga";

export default function* rootSaga() {
  yield all([productSaga()]);
}
