import React from "react";
import "./shopDetail.css";
import { Link } from "react-router-dom";
import Shops from "../data/shops.json";
import NavbarComponent from "../components/navbarComponent/navbarComponent";
import CartComponent from "../components/cartComponent/cartComponent";

const CheckOutPage = (props) => {
  //   const propsId = this.props.match.params.id;
  //   const ShopDetail = Shops.find((shop) => propsId == shop.id);
  const ShopDetail = Shops.map((shop) => shop);
  console.log(props);
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
                src={ShopDetail.banner_image}
                className="d-block w-100"
                alt="..."
              />
              <div
                className="w-100 h-100 position-absolute"
                style={{ top: 0, background: "#00000099" }}
              ></div>
            </div>
            <div className="carousel-caption d-block">
              <div
                className="p-1 mx-auto mb-3"
                style={{
                  border: "1px solid #ededed",
                  maxWidth: 190,
                  background: "#ffffff",
                }}
              >
                <img
                  src={ShopDetail.image}
                  className="card-img-top"
                  alt="..."
                  style={{ maxWidth: 180, margin: "auto" }}
                />
              </div>
              <div className="rating" style={{ letterSpacing: 2 }}>
                {(() => {
                  var rating;
                  switch (ShopDetail.rating) {
                    case 0:
                      rating = (
                        <p className="mb-0">
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                        </p>
                      );
                      break;
                    case 0.5:
                      rating = (
                        <p className="mb-0">
                          <i className="fas fa-star-half-alt full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                        </p>
                      );
                      break;
                    case 1:
                      rating = (
                        <p className="mb-0">
                          <i className="fas fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                        </p>
                      );
                      break;
                    case 1.5:
                      rating = (
                        <p className="mb-0">
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star-half-alt full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                        </p>
                      );
                      break;
                    case 2:
                      rating = (
                        <p className="mb-0">
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                        </p>
                      );
                      break;
                    case 2.5:
                      rating = (
                        <p className="mb-0">
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star-half-alt full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                        </p>
                      );
                      break;
                    case 3:
                      rating = (
                        <p className="mb-0">
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                        </p>
                      );
                      break;
                    case 3.5:
                      rating = (
                        <p className="mb-0">
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star-half-alt full_star"></i>
                          <i className="far fa-star full_star"></i>
                        </p>
                      );
                      break;
                    case 4:
                      rating = (
                        <p className="mb-0">
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="far fa-star full_star"></i>
                        </p>
                      );
                      break;
                    case 4.5:
                      rating = (
                        <p className="mb-0">
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star-half-alt full_star"></i>
                        </p>
                      );
                      break;
                    case 5:
                      rating = (
                        <p className="mb-0">
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                          <i className="fas fa-star full_star"></i>
                        </p>
                      );
                      break;
                  }
                  return rating;
                })()}
              </div>

              <h1>{ShopDetail.name}</h1>
              <p>{ShopDetail.address}</p>
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
              {ShopDetail.name}
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
            {/* <CartComponent
              orders={this.state.orders}
              total={this.state.total}
              emptyText={this.state.emptyText}
              deleteItem={this.deleteItem}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
