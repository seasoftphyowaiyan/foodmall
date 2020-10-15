import {
    ADDTOCART
} from "../action_types";

const ADD_TO_CART_ACTIONS = {
    getaddToCart,
}

export default ADD_TO_CART_ACTIONS;

function getaddToCart(foodId, foodName, foodPrice, foodDelivery, orders, total) {
    return dispatch => {
        const orderIndex = this.state.order.items.findIndex(
      (order) => order.id == foodId
    );
    if (orderIndex != -1) {
      let newArray = [...this.state.order.items];
      newArray[orderIndex] = {
        ...newArray[orderIndex],
        price: foodPrice * (newArray[orderIndex].quantity + 1),
        quantity: newArray[orderIndex].quantity + 1,
      };
      this.setState(
        {
          order: {
            items: newArray,
            total: this.state.order.total + foodPrice,
          },
        },
        () => {
          this.saveLocalStorage();
        }
      );
    } else {
      this.setState(
        {
          order: {
            items: [
              ...this.state.order.items,
              {
                id: foodId,
                name: foodName,
                price: foodPrice,
                delivery: foodDelivery,
                quantity: 1,
              },
            ],
            total: this.state.order.total + foodPrice,
          },
          emptyText: "",
        },
        () => {
          this.saveLocalStorage();
        }
      );
    }
    }
}