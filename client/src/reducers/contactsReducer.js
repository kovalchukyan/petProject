import {
    CREATE_CONTACT_REQUEST,
    CREATE_CONTACT_SUCCESS,
    CREATE_CONTACT_FAILURE,
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS,
    DELETE_CONTACT_FAILURE,
    LOAD_CONTACTS_REQUEST,
    LOAD_CONTACTS_SUCCESS
} from '../constants/constants';

let initialState = {
    isLoading: false,
    contacts: [],
    error: false
};

function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CONTACTS_REQUEST:
        case CREATE_CONTACT_REQUEST:
        case DELETE_CONTACT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_CONTACTS_SUCCESS:
        case CREATE_CONTACT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                contacts: state.contacts.concat(action.payload),
                error: false
            };

        case DELETE_CONTACT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                contacts: state.contacts.filter((contact) => {
                    return contact._id !== action.payload
                }),
                error: false
            };

        case CREATE_CONTACT_FAILURE:
        case DELETE_CONTACT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            };

        default:
            return state;
    }
}

export default contactsReducer;