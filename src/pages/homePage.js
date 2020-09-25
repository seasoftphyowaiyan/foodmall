import React from "react";
import CarouselComponent from "../components/carouselComponent/carouselComponent";
import LatestArticle from "../components/latestShopComponent/latestShopComponent";
import NavbarComponent from "../components/navbarComponent/navbarComponent";
import PopularShop from "../components/popularShopComponent/popularShopComponent";
import TopRatingShop from "../components/topRatingComponent/topRatingComponent";

const HomePage = () => {
  return (
    <div>
      <NavbarComponent />
      <CarouselComponent />

      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-12 mb-4">
            <h2>How it works</h2>
            <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
          </div>
          <div className="col-md-3">
            <div
              className="card"
              style={{
                background:
                  "url(http://www.ansonika.com/quickfood/img/icon_home_1.svg) center 40px no-repeat #fff",
                padding: "120px 0 0 0",
              }}
            >
              <span
                style={{
                  borderRadius: "50%",
                  border: "1px solid #ededed",
                  backgroundColor: "#fff",
                  position: "absolute",
                  top: "-20px",
                  display: "block",
                  width: 40,
                  height: 40,
                  lineHeight: "38px",
                  left: "50%",
                  marginLeft: "-20px",
                }}
              >
                1
              </span>
              <div className="card-body">
                <h5 className="card-title">Search by address</h5>
                <p className="card-text">
                  Find all restaurants available in your zone.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card"
              style={{
                background:
                  "url(http://www.ansonika.com/quickfood/img/icon_home_2.svg) center 40px no-repeat #fff",
                padding: "120px 0 0 0",
              }}
            >
              <span
                style={{
                  borderRadius: "50%",
                  border: "1px solid #ededed",
                  backgroundColor: "#fff",
                  position: "absolute",
                  top: "-20px",
                  display: "block",
                  width: 40,
                  height: 40,
                  lineHeight: "38px",
                  left: "50%",
                  marginLeft: "-20px",
                }}
              >
                2
              </span>
              <div className="card-body">
                <h5 className="card-title">Choose a restaurant</h5>
                <p className="card-text">
                  We have more than 1000s of menus online.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card"
              style={{
                background:
                  "url(http://www.ansonika.com/quickfood/img/icon_home_3.svg) center 40px no-repeat #fff",
                padding: "120px 0 0 0",
              }}
            >
              <span
                style={{
                  borderRadius: "50%",
                  border: "1px solid #ededed",
                  backgroundColor: "#fff",
                  position: "absolute",
                  top: "-20px",
                  display: "block",
                  width: 40,
                  height: 40,
                  lineHeight: "38px",
                  left: "50%",
                  marginLeft: "-20px",
                }}
              >
                3
              </span>
              <div className="card-body">
                <h5 className="card-title">Pay by card or cash</h5>
                <p className="card-text">
                  It's quick, easy and totally secure.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              className="card"
              style={{
                background:
                  "url(http://www.ansonika.com/quickfood/img/icon_home_4.svg) center 40px no-repeat #fff",
                padding: "120px 0 0 0",
              }}
            >
              <span
                style={{
                  borderRadius: "50%",
                  border: "1px solid #ededed",
                  backgroundColor: "#fff",
                  position: "absolute",
                  top: "-20px",
                  display: "block",
                  width: 40,
                  height: 40,
                  lineHeight: "38px",
                  left: "50%",
                  marginLeft: "-20px",
                }}
              >
                4
              </span>
              <div className="card-body">
                <h5 className="card-title">Delivery or takeaway</h5>
                <p className="card-text">You are lazy? Are you backing home?</p>
              </div>
            </div>
          </div>
        </div>
        <PopularShop />
        <TopRatingShop />
        <LatestArticle />
      </div>
    </div>
  );
};

export default HomePage;
