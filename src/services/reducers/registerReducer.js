import {
    REGISTER_START,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
} from "../constants/constants";

const initialState = {
    registerBegin: false,
    registerSuccess: false,
    registerSuccessData: "",
    registerFail: false,
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_START:
            return {
                ...state,
                loginBegin: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                registerBegin: false,
                registerSuccess: true,
                registerSuccessData: action.payload,
                registerFail: false,
            };
        case REGISTER_FAIL:
            return {
                ...state,
                registerBegin: false,
                registerSuccess: false,
                registerFail: true,
            };
        default:
            return state;
    }
};

export default registerReducer;
