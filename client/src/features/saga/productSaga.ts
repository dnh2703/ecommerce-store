import { call, put, takeEvery } from "redux-saga/effects";
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} from "../slice/productSlice";
import { AxiosResponse } from "axios";
import productApi from "../../api/productApi";
import reviewApi from "../../api/reviewApi";
import {
  getReviewsFailure,
  getReviewsStart,
  getReviewsSuccess,
} from "../slice/reviewSlice";

function* getAllProducts() {
  try {
    const res: AxiosResponse = yield call(productApi.getAllProducts);
    yield put(getProductsSuccess(res.data.products));
  } catch (e) {
    yield put(getProductsFailure());
  }
}

function* getAllReviews() {
  try {
    const res: AxiosResponse = yield call(reviewApi.getAllReview);
    yield put(getReviewsSuccess(res.data.reviews));
  } catch (e) {
    put(getReviewsFailure());
  }
}

function* productSaga() {
  yield takeEvery(getProductsStart, getAllProducts);
  yield takeEvery(getReviewsStart, getAllReviews);
}
export default productSaga;
