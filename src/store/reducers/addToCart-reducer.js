import {
  ADDTOCART
} from "../action_types";

let initialState = {
  order: {
    items: [],
    total: 0,
  },
  emptyText: "Cart is Empty!",
};
  // let order = localStorage.getItem("order")
  //   ? JSON.parse(localStorage.getItem("order"))
  //   : this.state.order;

  //   initialState = { 
  //     order: order,
  //   emptyText: !order.items.length ? "Cart is Empty!" : "",}

export function addToCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADDTOCART.ADD_TO_CART:
      return {
        ...state
      };
    default:
      return state;
  }
}