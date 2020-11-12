import React from "react";
import "./checkOut.css";
import { Link } from "react-router-dom";
import Shops from "../data/shops.json";
import NavbarComponent from "../components/navbarComponent/navbarComponent";
import CartComponent from "../components/cartComponent/cartComponent";

import { connect } from "react-redux";
import fetchShops from "../store/actions/fetchApi-action";
import InfoCartComponent from "../components/cartComponent/showInfoCartComponent";

class PaymentPage extends React.Component {
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
                    <div className="col-4 bs-wizard-step active">
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
              Payment Methods
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
            <h4 className="mb-0 p-3 text-white" style={{ background: '#78cfcf'}}>Payment Methods</h4>
            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <div className="custom-control custom-radio custom-control-inline w-100" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <input type="radio" id="customRadioInline1" name="customRadioInline" className="custom-control-input" defaultChecked />
                            <label className="custom-control-label w-100 font-weight-bold" htmlFor="customRadioInline1">Credit Card</label>
                        </div>
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="cardname">Name on card</label>
                                <input type="text" className="form-control" id="cardname" placeholder="Your First and Last Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cardno">Card Number</label>
                                <input type="text" className="form-control" id="cardno" placeholder="Your Card Number" />
                            </div>
                            <div className="form-row mb-3">
                                <div className="form-row col-md-6">
                                    <div className="col-md-12">
                                        <div className="form-group mb-0">
                                            <label htmlFor="">Expiration Date</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control" id="month" placeholder="MM" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control" id="year" placeholder="YYYY" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row col-md-6">
                                    <div className="col-md-12">
                                        <div className="form-group mb-0">
                                            <label htmlFor="">Security Code</label>
                                        </div>
                                    </div>    
                                    <div className="col-md-6">
                                        <div className="form-group mb-0">
                                            <input type="text" className="form-control" id="ccv" placeholder="CCV" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 m-auto">
                                        <img src="http://www.ansonika.com/quickfood/img/icon_ccv.gif" />
                                        <small style={{fontSize:10}}>Last 3 digits</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingTwo">
                        <div className="custom-control custom-radio custom-control-inline w-100" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <input type="radio" id="customRadioInline2" name="customRadioInline" className="custom-control-input" />
                            <label className="custom-control-label w-100 font-weight-bold" htmlFor="customRadioInline2">Pay with Paypal</label>
                        </div>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="paypalemail">Paypal Email Address</label>
                                <input type="text" className="form-control" id="paypalemail" placeholder="Your Paypal Email Address" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="headingThree">
                        <div className="custom-control custom-radio custom-control-inline w-100" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <input type="radio" id="customRadioInline3" name="customRadioInline" className="custom-control-input" />
                            <label className="custom-control-label w-100 font-weight-bold" htmlFor="customRadioInline3">Pay with Cash</label>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-3">
            <InfoCartComponent next={false} />
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

export default PaymentPage;