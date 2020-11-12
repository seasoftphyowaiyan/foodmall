import React from "react";
import "./checkOut.css";
import { Link } from "react-router-dom";
import NavbarComponent from "../components/navbarComponent/navbarComponent";

const OrderConfirmed = () => {
  let order = localStorage.getItem("order")
      ? JSON.parse(localStorage.getItem("order"))
        : null;
  return (
    <div>
      <NavbarComponent />
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ maxHeight: 500 }}>
            <div>
              <img
                src="http://www.ansonika.com/quickfood/img/sub_header_cart.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div
                className="w-100 h-100 position-absolute"
                style={{ top: 0, background: "#00000099" }}
              ></div>
            </div>
            <div className="payment carousel-caption d-block">
              <h2>Place Your Order</h2>
              <div className="bs-wizard row">
                    <div className="col-4 bs-wizard-step complete">
                        <div className="text-center bs-wizard-stepnum"><strong>1.</strong> Your details</div>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                        <a href="cart.html" className="bs-wizard-dot"></a>
                    </div>
                    <div className="col-4 bs-wizard-step complete">
                        <div className="text-center bs-wizard-stepnum"><strong>2.</strong> Payment</div>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                        <a href="#0" className="bs-wizard-dot"></a>
                    </div>
                    <div className="col-4 bs-wizard-step complete">
                        <div className="text-center bs-wizard-stepnum"><strong>3.</strong> Finish!</div>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                        <a href="cart_3.html" className="bs-wizard-dot"></a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumb bg-white" aria-label="breadcrumb">
        <div className="container">
          <ol className="d-flex flex-wrap mb-0 list-unstyled">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/shops">Shop Listing</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {/* {ShopDetail.name} */}
              Order Comfirmed
            </li>
          </ol>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <button>Add</button>
          </div>
          <div className="col-md-6">
              <div className="bg-white">
                  <h4 className="mb-0 p-3 text-white" style={{ background: '#78cfcf'}}>Order Confirmed!</h4>     
                    <div id="confirm" className="text-center px-3 mb-3">
                        <i className="far fa-check-circle my-4"></i>
                        <h3>Thank you!</h3>
                        <p>
                            Lorem ipsum dolor sit amet, nostrud nominati vis ex, essent conceptam eam ad. Cu etiam comprehensam nec. Cibo delicata mei an, eum porro legere no.
                        </p>
                    </div>
                    <h5 className="my-3 px-3">Summary</h5>
                    <table className="table table-striped nomargin confirm px-3">
                        <tbody>
                            {order.items.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <strong>{item.quantity}x</strong> {item.name}
                                    </td>
                                    <td className="text-right">
                                        <strong className="text-right">${item.price}</strong>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td>
                                    Delivery schedule <a href="#" class="tooltip-1" data-placement="top" title="" data-original-title="Please consider 30 minutes of margin for the delivery!"><i class="icon_question_alt"></i></a>
                                </td>
                                <td>
                                    <strong class="float-right">Today 07.30 pm</strong>
                                </td>
                            </tr>
                            <tr>
                                <td class="total_confirm">
                                    TOTAL
                                </td>
                                <td class="total_confirm">
                                    <span class="float-right">${order.total}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
              </div>
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;