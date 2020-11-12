import React from "react";
import "./checkOut.css";
import { Link } from "react-router-dom";
import Shops from "../data/shops.json";
import NavbarComponent from "../components/navbarComponent/navbarComponent";
import CartComponent from "../components/cartComponent/cartComponent";

import { connect } from "react-redux";
import fetchShops from "../store/actions/fetchApi-action";
import InfoCartComponent from "../components/cartComponent/showInfoCartComponent";

class CheckOutPage extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   order: {
  //   //     items: [],
  //   //     total: 0,
  //   //   },
  //   //   emptyText: "Cart is Empty!",
  //   // };
  // }

  // componentWillMount() {
  //   // const {fetchShops} = this.props;
  //   // fetchShops();
  //   this.props.dispatch(fetchShops());
  // }

  render(){
  //   const propsId = this.props.match.params.id;
  //   const ShopDetail = Shops.find((shop) => propsId == shop.id);
  // const ShopDetail = Shops.map((shop) => shop);
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
            <div className="checkout carousel-caption d-block">
              <h2>Place Your Order</h2>
              <div className="bs-wizard row">
                    <div className="col-4 bs-wizard-step active">
                        <div className="text-center bs-wizard-stepnum"><strong>1.</strong> Your details</div>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                        <a href="cart.html" className="bs-wizard-dot"></a>
                    </div>
                    <div className="col-4 bs-wizard-step disabled">
                        <div className="text-center bs-wizard-stepnum"><strong>2.</strong> Payment</div>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                        <a href="#0" className="bs-wizard-dot"></a>
                    </div>
                    <div className="col-4 bs-wizard-step disabled">
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
              Your Details
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
            <h4 className="mb-0 p-3 text-white" style={{ background: '#78cfcf'}}>Your Order Details</h4>
            <form className="p-3 bg-white">
              <div className="form-row mb-3">
                <div className="form-group col-md-6 mb-0">
                  <label htmlFor="firstname">First Name</label>
                  <input type="text" className="form-control" id="firstname" placeholder="Your First Name" />
                </div>
                <div className="form-group col-md-6 mb-0">
                  <label htmlFor="lastname">Last Name</label>
                  <input type="text" className="form-control" id="lastname" placeholder="Your Last Name" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Phone Number</label>
                <input type="text" className="form-control" id="mobile" placeholder="Your Mobile Phone Number" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="text" className="form-control" id="email" placeholder="Your Email Address" />
              </div>
              <div className="form-group">
                <label htmlFor="address">Your Full Address</label>
                <input type="text" className="form-control" id="address" placeholder="Your Full Address" />
              </div>
              <div className="form-row mb-3">
                <div className="form-group col-md-6 mb-0">
                  <label htmlFor="city">City</label>
                  <input type="text" className="form-control" id="city" placeholder="Your City" />
                </div>
                <div className="form-group col-md-6 mb-0">
                  <label htmlFor="postalcode">Postal Code</label>
                  <input type="text" className="form-control" id="postalcode" placeholder="Your Postal Code" />
                </div>
              </div>
              <div className="form-row mb-3">
                <div className="form-group col-md-6 mb-0">
                  <label htmlFor="deliverydate">Delivery Date</label>
                  <select id="deliverydate" className="form-control">
                    <option defaultValue>Select Date</option>
                    <option>Today</option>
                    <option>Tomorrow</option>
                  </select>
                </div>
                <div className="form-group col-md-6 mb-0">
                  <label htmlFor="deliverytime">Delivery Time</label>
                  <select id="deliverytime" className="form-control">
                    <option defaultValue>Select Time</option>
                    <option>11.30am</option>
                    <option>11.45am</option>
                    <option>12.15am</option>
                    <option>12.30am</option>
                    <option>12.45am</option>
                    <option>01.00pm</option>
                    <option>01.15pm</option>
                    <option>01.30pm</option>
                    <option>01.45pm</option>
                    <option>02.00pm</option>
                    <option>07.00pm</option>
                    <option>07.15pm</option>
                    <option>07.30pm</option>
                    <option>07.45pm</option>
                    <option>08.00pm</option>
                    <option>08.15pm</option>
                    <option>08.30pm</option>
                    <option>08.45pm</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="note">Notes For The Restaurant</label>
                <textarea id="note" rows="6" placeholder="Your Notes..." className="form-control"></textarea>
              </div>
            </form>
          </div>
          <div className="col-md-3">
            <InfoCartComponent next={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};
};

// const mapStateToProps = state => ({
//   shops: state.fetchApiReducer.shops,
//   error: state.fetchApiReducer.error,
//   isloading: state.fetchApiReducer.isloading,
//   // order: state.addToCartReducer.order
// })

// export default connect(
//   mapStateToProps,
//   // mapDispatchToProps
// )(CheckOutPage);

export default CheckOutPage;