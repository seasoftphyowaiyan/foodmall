import React from "react";
import "./shopListing.css";
import { Link } from "react-router-dom";

const ShopList = (props) => {
  return (
    <div className="col-md-6">
      <Link to={`/shops/${props.id}`} className="text-decoration-none">
        <div
          className={`popular_img ${props.popular == true ? "active" : null}`}
        ></div>
        <div
          className="card mb-4 text-center p-4 shop_list"
          style={{ minHeight: "152px" }}
        >
          <div
            className="p-1 mx-auto mb-3"
            style={{ border: "1px solid #ededed", maxWidth: 190 }}
          >
            <img
              src={props.image}
              className="card-img-top"
              alt="..."
              style={{ maxWidth: 180, margin: "auto" }}
            />
          </div>
          <div className="rating" style={{ letterSpacing: 2 }}>
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
            <h5 className="card-title">{props.name}</h5>
            <small className="card-text">{props.address}</small>
          </div>
          <ul className="list-unstyled mt-3">
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
      </Link>
    </div>
  );
};

export default ShopList;
