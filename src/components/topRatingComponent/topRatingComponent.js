import React from "react";
import Shops from "../../data/shops.json";

const TopRatingShop = () => {
  const FilteredShops = Shops.filter((shop) => shop.rating)
    .sort((a, b) => a.rating - b.rating)
    .reverse();
  const TopRatingShops = FilteredShops.filter((shop, index) => index < 6);
  return (
    <div className="container-fluid mb-5">
      <div className="container ">
        <div
          className="row mb-4"
          style={{
            background: "#03A9F4",
            padding: "1.5rem 0.5rem 0.5rem",
            borderRadius: 7,
          }}
        >
          <div className="col-md-12 mb-4">
            <h2 className="text-center text-white">Top Rating Shops</h2>
          </div>
          {TopRatingShops.map((shop) => (
            <div className="col-md-6" key={shop.id}>
              <div
                className={`popular_img ${
                  shop.popular == true ? "active" : null
                }`}
              ></div>

              <div className="card mb-3 shop_list">
                <div className="row no-gutters">
                  <div className="col-md-3 p-3">
                    <div
                      className="p-1"
                      style={{ border: "1px solid #ededed", maxWidth: 160 }}
                    >
                      <img
                        src={shop.image}
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
                        switch (shop.rating) {
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
                      <h5 className="card-title mb-2">{shop.name}</h5>
                      <small className="card-text">{shop.address}</small>
                    </div>
                    <ul className="list-unstyled mt-2 mb-0">
                      <li className="d-inline-block mr-3">
                        <small>
                          Take away
                          <i
                            className={`far fa-check-circle align-middle ml-1 takeaway ${
                              shop.takeaway == true ? "active" : null
                            }`}
                          ></i>
                        </small>
                      </li>
                      <li className="d-inline-block">
                        <small>
                          Delivery
                          <i
                            className={`far fa-check-circle align-middle ml-1 delivery ${
                              shop.delivery == true ? "active" : null
                            }`}
                          ></i>
                        </small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatingShop;
