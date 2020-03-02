import {
    CREATE_CONTACT_REQUEST,
    CREATE_CONTACT_SUCCESS,
    CREATE_CONTACT_FAILURE
} from '../constants/constants';
import { apiRequestCreateContacts } from '../api/apiRequest';

function createContactRequest() {
    return {
        type: CREATE_CONTACT_REQUEST,
    }
}

function createContactSuccess(data) {
    return {
        type: CREATE_CONTACT_SUCCESS,
        payload: data.contact
    }
}

function createContactFailure(error) {
    return {
        type: CREATE_CONTACT_FAILURE,
        payload: error
    }
}

export default function createContactFetch(username, data) {
    return dispatch => {
        dispatch(createContactRequest());
        apiRequestCreateContacts(username, data)
            .then(response => {
                dispatch(createContactSuccess(response));
            })
            .catch(error => {
                dispatch(createContactFailure(error));
            })
    }
}