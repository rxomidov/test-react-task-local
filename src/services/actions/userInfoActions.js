import {
    USER_INFO_FAIL,
    USER_INFO_START,
    USER_INFO_SUCCESS,
} from "../constants/constants";

export const userInfoStart = (data) => {
    return {
        type: USER_INFO_START,
        payload: data,
    };
};

export const userInfoSuccess = (data) => {
    return {
        type: USER_INFO_SUCCESS,
        payload: data,
    };
};

export const userInfoFail = () => {
    return {
        type: USER_INFO_FAIL,
    };
};
