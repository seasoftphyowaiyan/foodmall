import {
    combineReducers
} from "redux";
import {
    addToCartReducer
} from "./addToCart-reducer";
import {
    fetchApiReducer
} from "./fetchApi-reducer";

const rootReducer = combineReducers({
    addToCartReducer,
    fetchApiReducer
})

export default rootReducer;