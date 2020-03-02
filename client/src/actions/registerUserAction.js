import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from '../constants/constants';
import { apiRequestUserRegister } from '../api/apiRequest';
import loadContactsFetch from './loadContactsAction';

function registerUserRequest() {
    return {
        type: REGISTER_USER_REQUEST
    }
}

function registerUserSuccess(response) {
    return {
        type: REGISTER_USER_SUCCESS,
        username: response.user.username,
        id: response.user._id
    }
}

function registerUserFailure(error) {
    return {
        type: REGISTER_USER_FAILURE,
        payload: error
    }
}

export function registerUserFetch(username, password) {
    return dispatch => {
        dispatch(registerUserRequest());
        apiRequestUserRegister(username, password)
            .then(response => {
                if(response.success) {
                    dispatch(registerUserSuccess(response));
                    dispatch(loadContactsFetch(response.user.contacts));
                } else {
                    dispatch(registerUserFailure(response.error))
                }
            })
            .catch(error => {
                dispatch(registerUserFailure(error));
            })
    }
}