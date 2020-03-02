import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from '../constants/constants';
import { apiRequestUserLogin } from '../api/apiRequest';
import loadContactsFetch from './loadContactsAction';

function loginUserRequest() {
    return {
        type: LOGIN_USER_REQUEST
    }
}

function loginUserSuccess(response) {
    return {
        type: LOGIN_USER_SUCCESS,
        username: response.user.username,
        id: response.user._id
    }
}

function loginUserFailure(error) {
    return {
        type: LOGIN_USER_FAILURE,
        payload: error
    }
}

export function loginUserFetch(username, password) {
    return dispatch => {
        dispatch(loginUserRequest());
        apiRequestUserLogin(username, password)
            .then(response => {
                if(response.success) {
                    dispatch(loginUserSuccess(response));
                    dispatch(loadContactsFetch(response.user.contacts));
                } else {
                    dispatch(loginUserFailure(response.error))
                }

            })
            .catch(error => {
                dispatch(loginUserFailure(error));
            })
    }
}