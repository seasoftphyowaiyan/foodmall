import React from "react";
import "./shopDetail.css";
import { Link } from "react-router-dom";
import Foods from "../data/food.json";
import NavbarComponent from "../components/navbarComponent/navbarComponent";
import ShopDetailComponent from "../components/shopDetailComponent/shopDetailComponent";
import CartComponent from "../components/cartComponent/cartComponent";

import { connect } from "react-redux";
import fetchShops from "../store/actions/fetchApi-action";
import getaddToCart from "../store/actions/addToCart-action";

class ShopDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: {
        items: [],
        total: 0,
      },
      emptyText: "Cart is Empty!",
    };
  }
  

  componentWillMount() {
    // const {fetchShops} = this.props;
    // fetchShops();
    this.props.dispatch(fetchShops());
  }

  componentDidMount() {
    // const {order} = this.props;
    let order = localStorage.getItem("order")
      ? JSON.parse(localStorage.getItem("order"))
      : this.state.order;

    this.setState({
      order: order,
      emptyText: !order.items.length ? "Cart is Empty!" : "",
    });

    // this.props.dispatch(getaddToCart(order));
  }
  

  addToCart = (foodId, foodName, foodPrice, foodDelivery) => {
    // this.props.dispatch(
    //   ADD_TO_CART_ACTIONS.getaddToCart(
    //     foodId,
    //     foodName,
    //     foodPrice,
    //     foodDelivery,
    //     this.state.order,
    //     this.state.total
    //   )
    // );
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
  };

  deleteItem = (deleteId, foodPrice) => {
    const orderIndex = this.state.order.items.findIndex(
      (order) => order.id == deleteId
    );
    if (orderIndex != -1) {
      let newArray = [...this.state.order.items];
      newArray[orderIndex] = {
        ...newArray[orderIndex],
        price:
          newArray[orderIndex].price -
          foodPrice / newArray[orderIndex].quantity,
        quantity: newArray[orderIndex].quantity - 1,
      };
      var totalAmount =
        newArray[orderIndex].price / newArray[orderIndex].quantity;
      if (isNaN(totalAmount)) {
        totalAmount = foodPrice;
      }
      this.setState(
        {
          order: {
            items: newArray,
            total: this.state.order.total - totalAmount,
          },
        },
        () => {
          this.saveLocalStorage();
        }
      );
      if (newArray[orderIndex].quantity == 0) {
        this.setState(
          {
            order: {
              items: this.state.order.items.filter(
                (order) => order.id !== deleteId
              ),
              total: this.state.order.total - totalAmount,
            },
            // emptyText: "Cart is Empty!",
          },
          () => {
            this.saveLocalStorage();
          }
        );
      }
    } else {
      //   this.setState(
      //     {
      //       order: {
      //         items: this.state.order.items.filter(
      //           (order) => order.id !== deleteId
      //         ),
      //       },
      //     },
      //     () => {
      //       this.saveLocalStorage();
      //     }
      //   );
    }
  };

  saveLocalStorage = () => {
    localStorage.setItem("order", JSON.stringify(this.state.order));
  };

  resetCart = () => {
    this.setState(
      {
        order: {
          items: [],
          total: 0,
        },
        emptyText: "Cart is Empty!",
      },
      () => {
        localStorage.removeItem("order", JSON.stringify(this.state.order));
      }
    );
  };

  render() {
    const {shops, error, isloading, order} = this.props;
    const propsId = this.props.match.params.id;
    console.log(order)
    const ShopDetail = shops.find((shop) => propsId == shop.id);
    if(!ShopDetail){
      return (
        <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }
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
              <button onClick={this.resetCart}>Reset Cart</button>
            </div>
            <div className="col-md-6">
              <ShopDetailComponent id={propsId} addToCart={this.addToCart} />
            </div>
            <div className="col-md-3">
              <CartComponent
                order={this.state.order}
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

const mapStateToProps = state => ({
  shops: state.fetchApiReducer.shops,
  error: state.fetchApiReducer.error,
  isloading: state.fetchApiReducer.isloading,
  // order: state.addToCartReducer.order
})

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(ShopDetailPage);