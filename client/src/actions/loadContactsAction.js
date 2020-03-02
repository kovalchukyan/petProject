import {
    LOAD_CONTACTS_REQUEST,
    LOAD_CONTACTS_SUCCESS
} from '../constants/constants';

export function loadContactsRequest() {
    return {
        type: LOAD_CONTACTS_REQUEST
    }
}

export function loadContactsSuccess(contacts) {
    return {
        type: LOAD_CONTACTS_SUCCESS,
        payload: contacts
    }
}

export default function loadContactsFetch(contacts) {
    return dispatch => {
        dispatch(loadContactsRequest());
        dispatch(loadContactsSuccess(contacts))
    }
}