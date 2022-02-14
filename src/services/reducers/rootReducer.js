import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import userInfoReducer from "./userInfoReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    userInfo: userInfoReducer,
});