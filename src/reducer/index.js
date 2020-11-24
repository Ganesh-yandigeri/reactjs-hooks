import { combineReducers } from 'redux';
import { contactReducer } from './contactReducer';
import {productReducer} from './productReducer';

export default combineReducers({
    contacts: contactReducer,
    product: productReducer,
});