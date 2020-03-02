import {
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAILURE
} from '../constants/constants';
import { apiRequestDeleteContact } from '../api/apiRequest';

function deleteContactRequest() {
    return {
        type: DELETE_CONTACT_REQUEST,
    }
}

function deleteContactSuccess(data) {
    return {
        type: DELETE_CONTACT_SUCCESS,
        payload: data.contact
    }
}

function deleteContactFailure(error) {
    return {
        type: DELETE_CONTACT_FAILURE,
        payload: error
    }
}

export default function deleteContactFetch(username, id) {
    return dispatch => {
        dispatch(deleteContactRequest());
        apiRequestDeleteContact(username, id)
            .then(response => {
                dispatch(deleteContactSuccess(response));
            })
            .catch(error => {
                dispatch(deleteContactFailure(error));
            })
    }
}