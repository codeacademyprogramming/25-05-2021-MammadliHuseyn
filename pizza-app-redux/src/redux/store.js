import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducer";
import thunk from 'redux-thunk';


const logger = storeApi => next => action => {
    console.log('Prev store', storeApi.getState());
    console.log('Action', action);
    const result = next(action);
    console.log('After store', storeApi.getState());
    return result;
}

const store = createStore(
    rootReducer,
    applyMiddleware(
        logger,
        thunk
    )
);

export default store;