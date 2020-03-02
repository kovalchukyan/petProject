import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from '../constants/constants';

let initialState = {
    username: null,
    id: null,
    isLoading: false,
    isAuth: false,
    error: null
};

function registerUserReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case REGISTER_USER_SUCCESS:
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                username: action.username,
                id: action.id,
                isLoading: false,
                isAuth: true,
                error: null
            };

        case REGISTER_USER_FAILURE:
        case LOGIN_USER_FAILURE:
            return {
                username: null,
                id: null,
                isLoading: false,
                isAuth: false,
                error: action.payload
            };


        default:
            return state;
    }
}

export default registerUserReducer;