import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    contactsReducer,
    userReducer
});

export default rootReducer;