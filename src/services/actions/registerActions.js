import {
    REGISTER_FAIL,
    REGISTER_START,
    REGISTER_SUCCESS,
} from "../constants/constants";

export const registerStart = (data) => {
    return {
        type: REGISTER_START,
        payload: data,
    };
};

export const registerSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data,
    };
};

export const registerFail = () => {
    return {
        type: REGISTER_FAIL,
    };
};
