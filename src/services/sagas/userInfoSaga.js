import { takeLatest, put, call, all } from "redux-saga/effects";
import api from "../api/api";

import { userInfoSuccess, userInfoFail } from "../actions/userInfoActions";
import { USER_INFO_START } from "../constants/constants";

export function* getUserInfo({ payload }) {
    try {
        const response = yield api.request.get("/user");

        yield put(userInfoSuccess(response.data));
    } catch (e) {
        yield put(userInfoFail());
    }
}

export function* getUserInfoStart() {
    yield takeLatest(USER_INFO_START, getUserInfo);
}

export function* userInfoSagas() {
    yield all([call(getUserInfoStart)]);
}