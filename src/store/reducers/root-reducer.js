import {
    combineReducers
} from "redux";
import {
    addToCartReducer
} from "./addToCart-reducer";

const rootReducer = combineReducers({
    addToCartReducer
})

export default rootReducer;