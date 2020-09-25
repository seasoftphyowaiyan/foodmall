import {
    createStore,
    applyMiddleware
} from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers/root-reducer";
import thunk from 'redux-thunk';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares, thunk));

export default store;