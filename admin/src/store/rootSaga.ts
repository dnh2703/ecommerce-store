import { all } from "redux-saga/effects";
import productSaga from "../features/saga/productSaga";

export default function* rootSaga() {
  yield all([productSaga()]);
}
