import {takeLatest, put, call, all} from "redux-saga/effects";
import api from "../api/api";
import {
    registerFail,
    registerSuccess,
} from "../actions/registerActions";
import {REGISTER_START} from "../constants/constants";

export function* postRegisterGetResponse({payload}) {
    try {
        const response = yield api.request.post("/signin", payload);
        console.log(response);
        yield put(registerSuccess(response.data));
        // localStorage.setItem("token", response.data.token);
    } catch (e) {
        yield put(registerFail());
    }
}

export function* postRegisterGetResponseStart() {
    yield takeLatest(REGISTER_START, postRegisterGetResponse);
}

export function* registerSagas() {
    yield all([call(postRegisterGetResponseStart)]);
}
