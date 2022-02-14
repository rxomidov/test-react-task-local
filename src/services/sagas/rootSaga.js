import { all, call } from "redux-saga/effects";

//all sagas
import {loginSagas} from "./loginSaga";
import {registerSagas} from "./registerSaga";
import {userInfoSagas} from "./userInfoSaga";

export default function* rootSaga() {
    yield all([
        call(loginSagas),
        call(registerSagas),
        call(userInfoSagas),
    ]);
}