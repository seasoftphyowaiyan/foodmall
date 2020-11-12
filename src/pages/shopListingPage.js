import React from "react";
import { Link } from "react-router-dom";
// import Shops from "../data/shops.json";
import {SHOPS_URL} from "../data/api";
import ShopList from "../components/shopListingComponent/shopListingComponent";
import NavbarComponent from "../components/navbarComponent/navbarComponent";
import FiltersComponent from "../components/filtersComponent/filtersComponent";
import ShopListRow from "../components/shopListingComponent/shopListingRowComponent";

import { connect } from "react-redux";
import fetchShops from "../store/actions/fetchApi-action";

class ShopListingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }
  componentWillMount() {
    // const {fetchShops} = this.props;
    // fetchShops();
    this.props.dispatch(fetchShops());
  }
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  input = React.createRef();
  render() {
    const {shops, error, isloading} = this.props;
    return (
      <div>
        <NavbarComponent />
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="http://www.ansonika.com/quickfood/img/slides/slide_4.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
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
              <li className="breadcrumb-item active" aria-current="page">
                Shop Listing
              </li>
            </ol>
          </div>
        </nav>

        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3">
              <FiltersComponent />
            </div>
            <div className="col-md-9">
              <div className="row mb-4">
                <div className="col-md-3 pr-0">
                  <select
                    className="form-control rounded-0"
                    style={{
                      borderColor: "#ededed",
                      boxShadow: "none",
                      fontSize: 14,
                      height: 38,
                    }}
                  >
                    <option>Sort by Ranking</option>
                    <option>Lowest by Ranking</option>
                    <option>Highest by Ranking</option>
                  </select>
                </div>
                <div className="col-md-8 p-0">
                  <form className="">
                    <input
                      className="form-control rounded-0"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      style={{ borderColor: "#ededed", boxShadow: "none" }}
                      ref={this.input}
                      onChange={
                        (this.search = () => {
                          this.setState({
                            shops: this.state.shops.filter(
                              (shop) => shop.id !== this.input.current.value
                            ),
                          });
                          console.log(this.input.current.value);
                          console.log(this.state.shops);
                        })
                      }
                    />
                  </form>
                </div>
                <div className="col-md-1 pl-0">
                  <button
                    className="btn w-100 bg-white rounded-0"
                    style={{ border: "1px solid #ededed", boxShadow: "none" }}
                    onClick={this.toggle}
                  >
                    {this.state.toggle ? (
                      <i className="fas fa-list-ul"></i>
                    ) : (
                      <i className="fas fa-th"></i>
                    )}
                  </button>
                </div>
              </div>

              {this.state.toggle ? (
                <div className="row grip_page">
                  {shops.map(({ id, ...otherItemProps }) => (
                    <ShopList key={id} id={id} {...otherItemProps} />
                  ))}
                </div>
              ) : (
                <div className="row list_page">
                  {shops.map(({ id, ...otherItemProps }) => (
                    <ShopListRow key={id} id={id} {...otherItemProps} />
                  ))}
                </div>
              )}
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
  isloading: state.fetchApiReducer.isloading
})

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(ShopListingPage);