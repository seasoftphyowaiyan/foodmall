import React from "react";

const CartComponent = (props) => {
  return (
    <div id="cart_box">
      <h3>
        Your order
        <i className="fas fa-shopping-cart text-right float-right"></i>
      </h3>
      <table className="table table_summary">
        <caption className="py-0 px-1">{props.emptyText}</caption>
        <tbody>
          {props.orders.map((order, index) => (
            <tr key={index}>
              <td>
                <a href="#0" className="remove_item">
                  <i
                    className="fas fa-minus-circle mr-1"
                    onClick={() => props.deleteItem(order.id, order.price)}
                  ></i>
                </a>
                <strong>{order.quantity}x</strong> {order.name}
              </td>
              <td className="text-right">
                <strong className="text-right">${order.price}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <div className="row" id="options_2">
        <div className="col-md-6">
          <label className="">
            <div
              className="deliveryortakeaway checked"
              style={{ position: "relative" }}
            >
              <input
                type="radio"
                value=""
                defaultChecked="checked"
                name="option_2"
                className="icheck"
                style={{}}
              />
            </div>
            Delivery
          </label>
        </div>
        <div className="col-md-6">
          <label className="">
            <div
              className="deliveryortakeaway"
              style={{ position: "relative" }}
            >
              <input
                type="radio"
                value=""
                name="option_2"
                className="icheck"
                style={{}}
              />
            </div>
            Take Away
          </label>
        </div>
      </div>
      <hr />
      <table className="table table_summary">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td className="text-right">
              <span>$56</span>
            </td>
          </tr>
          <tr>
            <td>Delivery fee</td>
            <td className="text-right">
              <span>$10</span>
            </td>
          </tr>
          <tr>
            <td className="total">TOTAL</td>
            <td className="total text-right">
              <span>${props.total}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <a className="btn_full" href="cart.html">
        Order now
      </a>
    </div>
  );
};

export default CartComponent;