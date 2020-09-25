import React from "react";
import "./shopListing.css";
import { Link } from "react-router-dom";

const ShopListRow = (props) => {
  return (
    <div className="col-md-12">
      <div
        className={`popular_img ${props.popular == true ? "active" : null}`}
      ></div>

      <div className="card mb-3 shop_list">
        <div className="row no-gutters">
          <div className="col-md-3 p-3">
            <div
              className="p-1"
              style={{ border: "1px solid #ededed", maxWidth: 160 }}
            >
              <img
                src={props.image}
                className="card-img-top"
                alt="..."
                style={{ maxWidth: 180, margin: "auto" }}
              />
            </div>
          </div>
          <div className="col-md-7 py-3">
            <div className="rating mb-1" style={{ letterSpacing: 2 }}>
              {(() => {
                var rating;
                switch (props.rating) {
                  case 0:
                    rating = (
                      <small>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                      </small>
                    );
                    break;
                  case 0.5:
                    rating = (
                      <small>
                        <i className="fas fa-star-half-alt full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                      </small>
                    );
                    break;
                  case 1:
                    rating = (
                      <small>
                        <i className="fas fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                      </small>
                    );
                    break;
                  case 1.5:
                    rating = (
                      <small>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star-half-alt full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                      </small>
                    );
                    break;
                  case 2:
                    rating = (
                      <small>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                      </small>
                    );
                    break;
                  case 2.5:
                    rating = (
                      <small>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star-half-alt full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                      </small>
                    );
                    break;
                  case 3:
                    rating = (
                      <small>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                      </small>
                    );
                    break;
                  case 3.5:
                    rating = (
                      <small>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star-half-alt full_star"></i>
                        <i className="far fa-star full_star"></i>
                      </small>
                    );
                    break;
                  case 4:
                    rating = (
                      <small>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="far fa-star full_star"></i>
                      </small>
                    );
                    break;
                  case 4.5:
                    rating = (
                      <small>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star-half-alt full_star"></i>
                      </small>
                    );
                    break;
                  case 5:
                    rating = (
                      <small>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                        <i className="fas fa-star full_star"></i>
                      </small>
                    );
                    break;
                }
                return rating;
              })()}
            </div>
            <div className="">
              <h5 className="card-title mb-2">{props.name}</h5>
              <small className="card-text">{props.address}</small>
            </div>
            <ul className="list-unstyled mt-2 mb-0">
              <li className="d-inline-block mr-3">
                <small>
                  Take away
                  <i
                    className={`far fa-check-circle align-middle ml-1 takeaway ${
                      props.takeaway == true ? "active" : null
                    }`}
                  ></i>
                </small>
              </li>
              <li className="d-inline-block">
                <small>
                  Delivery
                  <i
                    className={`far fa-check-circle align-middle ml-1 delivery ${
                      props.delivery == true ? "active" : null
                    }`}
                  ></i>
                </small>
              </li>
            </ul>
          </div>
          <div className="col-md-2 p-3 m-auto text-center">
            <Link to={`/shops/${props.id}`} className="view_menu">
              VIEW MENU
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopListRow;
