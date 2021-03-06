import React from "react";
import { Link, useHistory } from "react-router-dom";

const InfoCartComponent = (props) => {
    let order = localStorage.getItem("order")
      ? JSON.parse(localStorage.getItem("order"))
        : null;
    
    let history = useHistory();
  return (
    <div id="cart_box">
      <h3>
        Your order
        <i className="fas fa-shopping-cart text-right float-right"></i>
      </h3>
      <table className="table table_summary">
        {/* <caption className="py-0 px-1">{emptyText}</caption> */}
        <tbody>
          {order.items.map((item, index) => (
            <tr key={index}>
              <td>
                <a href="#0" className="remove_item mr-1">
                  <i
                    className="fas fa-minus-circle"
                    // onClick={() => props.deleteItem(item.id, item.price)}
                  ></i>
                </a>
                <strong>{item.quantity}x</strong> {item.name}
              </td>
              <td className="text-right">
                <strong className="text-right">${item.price}</strong>
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
              <span>${order.total}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      
        {props.next ? (
            <div>
                <button className="btn_full" onClick={() => history.goBack()}>Back</button>
                <Link to="/payment_process" className="btn_full">
                    Next
                </Link>
            </div>
          ) : (
            <div>
                <button className="btn_full" onClick={() => history.goBack()}>Back</button>
                <Link to="/order_confirm" className="btn_full">
                    Order Confirm
                </Link>
            </div>
        )}
    </div>
  );
};

export default InfoCartComponent;
