import React from "react";
import "./shopDetail.css";
import { Link } from "react-router-dom";
import Shops from "../data/shops.json";
import Foods from "../data/food.json";
import NavbarComponent from "../components/navbarComponent/navbarComponent";
import ShopDetailComponent from "../components/shopDetailComponent/shopDetailComponent";
import CartComponent from "../components/cartComponent/cartComponent";

class ShopDetailPage extends React.Component {
  state = {
    orders: [],
    total: 0,
    emptyText: "Cart is Empty!",
  };
  addToCart = (foodId, foodName, foodPrice, foodDelivery) => {
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
            delivery: foodDelivery,
            quantity: 1,
          },
        ],
        total: this.state.total + foodPrice,
        emptyText: "",
      });
    }
  };
  deleteItem = (deleteId, foodPrice) => {
    const orderIndex = this.state.orders.findIndex(
      (order) => order.id == deleteId
    );
    // if (orderIndex != -1) {
    //   let newArray = [...this.state.orders];
    //   newArray[orderIndex] = {
    //     ...newArray[orderIndex],
    //     price: newArray[orderIndex].price - foodPrice,
    //     quantity: newArray[orderIndex].quantity - 1,
    //   };
    //   console.log(newArray[orderIndex].price);
    //   this.setState({
    //     orders: newArray,
    //     total: this.state.total - foodPrice,
    //   });
    // } else {}
    this.setState({
      orders: this.state.orders.filter((order) => order.id !== deleteId),
    });
  };

  render() {
    const propsId = this.props.match.params.id;
    const ShopDetail = Shops.find((shop) => propsId == shop.id);
    console.log(this.state.orders);
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
              <button onClick={this.addToCart}>Add</button>
            </div>
            <div className="col-md-6">
              <ShopDetailComponent id={propsId} addToCart={this.addToCart} />
            </div>
            <div className="col-md-3">
              <CartComponent
                orders={this.state.orders}
                total={this.state.total}
                emptyText={this.state.emptyText}
                deleteItem={this.deleteItem}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ShopDetailPage;
