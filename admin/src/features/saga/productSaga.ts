import { AxiosResponse } from "axios";
import { IProductData } from "../../interfaces/product";
import { call, put, takeEvery } from "redux-saga/effects";
import productApi from "../../api/productApi";
import {
  getProductsFailure,
  getProductsStart,
  getProductsSuccess,
} from "../slice/productSlice";

function* getProducts() {
  try {
    const product: AxiosResponse<IProductData> = yield call(
      productApi.getAllProducts
    );
    yield put(getProductsSuccess(product.data.products));
  } catch (error) {
    yield put(getProductsFailure());
  }
}

function* productSaga() {
  yield takeEvery(getProductsStart, getProducts);
}

export default productSaga;
