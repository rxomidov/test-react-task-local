import {
    USER_INFO_START,
    USER_INFO_FAIL,
    USER_INFO_SUCCESS,
} from "../constants/constants";

const initialState = {
    userInfoBegin: false,
    userInfoSuccess: false,
    userInfoSuccessData: "",
    userInfoFail: false,
};

const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO_START:
            return {
                ...state,
                loginBegin: true,
            };
        case USER_INFO_SUCCESS:
            return {
                ...state,
                userInfoBegin: false,
                userInfoSuccess: true,
                userInfoSuccessData: action.payload,
                userInfoFail: false,
            };
        case USER_INFO_FAIL:
            return {
                ...state,
                userInfoBegin: false,
                userInfoSuccess: false,
                userInfoFail: true,
            };
        default:
            return state;
    }
};

export default userInfoReducer;
