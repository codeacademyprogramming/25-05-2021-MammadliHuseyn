import { createStore, applyMiddleware } from 'redux';
import reducer from "./reducer";
import thunk from 'redux-thunk';


const logger = storeApi => next => action => {
    console.log('Store before dispatch', storeApi.getState());
    console.log('Action dispatch', action);
    const result = next(action);
    console.log('Store after dispatch', storeApi.getState());
    return result;
}

const store = createStore(
    reducer,
    applyMiddleware(
        logger,
        thunk
    )
);

export default store;