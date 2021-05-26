import { basketReducer } from './reducer/basketReducer';
import { productReducer } from './reducer/productReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    basketReducer,
    productReducer
})


export default rootReducer;