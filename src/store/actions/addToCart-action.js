import {
    ADDTOCART
} from "../action_types";

const addToCartActions = {
    getaddToCart,
}

export default addToCartActions;

function getaddToCart() {
    return dispatch => {
        dispatch({
            type: ADDTOCART.ADD_CART,
            payload: {
                foodId,
                foodName,
                foodPrice
            }
        })
    }
}