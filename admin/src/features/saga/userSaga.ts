import { AxiosResponse } from "axios";
import { IUser, IUserData } from "../../interfaces/user";
import userApi from "../../api/modules/userApi";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
} from "../slice/userSlice";

function* getUser() {
  try {
    const res: AxiosResponse<IUserData> = yield call(userApi.getAllUsers);
    yield put(getUsersSuccess(res.data.users));
  } catch (error) {
    yield put(getUsersFailure());
  }
}

function* userSaga() {
  yield takeEvery(getUsersStart, getUser);
}

export default userSaga;
