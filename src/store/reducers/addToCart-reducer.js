import {
  ADDTOCART
} from "../action_types";

let initialState = {
  orders: [],
  total: 0,
};

export function addToCartReducer(state = initialState, action) {
  switch (action.type) {
    case ADDTOCART.ADD_CART:
      const {
        foodId, foodName, foodPrice
      } = action.payload;
      const orderIndex = this.state.orders.findIndex(
        (order) => order.id == foodId
      );
      if (orderIndex != -1) {
        let newArray = [...this.state.orders];
        newArray[orderIndex] = {
          ...newArray[orderIndex],
          price: foodPrice * (newArray[orderIndex].quantity + 1),
          quantity: newArray[orderIndex].quantity + 1,
        };
        this.setState({
          orders: newArray,
          total: this.state.total + foodPrice,
        });
      } else {
        this.setState({
          orders: [
            ...this.state.orders,
            {
              id: foodId,
              name: foodName,
              price: foodPrice,
              quantity: 1,
            },
          ],
          total: this.state.total + foodPrice,
        });
      }

      return state;
    default:
      return state;
  }
}