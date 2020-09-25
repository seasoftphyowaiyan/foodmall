import React from "react";
import "./filters.css";

const FiltersComponent = () => {
  return (
    <div id="filters_col">
      <a
        data-toggle="collapse"
        href="#collapseFilters"
        aria-expanded="true"
        aria-controls="collapseFilters"
        id="filters_col_bt"
        className=""
      >
        Filters <i className="icon-plus-1 pull-right"></i>
      </a>
      <div
        className="collapse in show mb-4"
        id="collapseFilters"
        aria-expanded="true"
      >
        <div className="filter_type">
          <h6>Distance</h6>
          <input
            type="text"
            id="range"
            defaultValue=""
            name="range"
            className="irs-hidden-input"
            readOnly=""
          />
          <h6>Type</h6>
          <ul>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              ></input>
              <label className="" htmlFor="defaultCheck1">
                All <small>(49)</small>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck2"
              ></input>
              <label className="" htmlFor="defaultCheck2">
                American <small>(12)</small>
              </label>
              <i className="color_1"></i>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck3"
              ></input>
              <label className="" htmlFor="defaultCheck3">
                Chinese <small>(5)</small>
              </label>
              <i className="color_2"></i>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck4"
              ></input>
              <label className="" htmlFor="defaultCheck4">
                Hamburger <small>(7)</small>
              </label>
              <i className="color_3"></i>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck5"
              ></input>
              <label className="" htmlFor="defaultCheck5">
                Fish <small>(1)</small>
              </label>
              <i className="color_4"></i>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck6"
              ></input>
              <label className="" htmlFor="defaultCheck6">
                Mexican <small>(49)</small>
              </label>
              <i className="color_5"></i>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck7"
              ></input>
              <label className="" htmlFor="defaultCheck7">
                Pizza <small>(22)</small>
              </label>
              <i className="color_6"></i>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck8"
              ></input>
              <label className="" htmlFor="defaultCheck8">
                Sushi <small>(43)</small>
              </label>
              <i className="color_7"></i>
            </li>
          </ul>
        </div>
        <div className="filter_type">
          <h6>Rating</h6>
          <ul>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck9"
              ></input>
              <label className="" htmlFor="defaultCheck9">
                <span className="rating">
                  <i className="far fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                </span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck10"
              ></input>
              <label className="" htmlFor="defaultCheck10">
                <span className="rating">
                  <i className="fas fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                </span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck11"
              ></input>
              <label className="" htmlFor="defaultCheck11">
                <span className="rating">
                  <i className="fas fa-star full_star"></i>
                  <i className="fas fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                </span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck12"
              ></input>
              <label htmlFor="defaultCheck12">
                <span className="rating">
                  <i className="fas fa-star full_star"></i>
                  <i className="fas fa-star full_star"></i>
                  <i className="fas fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                </span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck13"
              ></input>
              <label htmlFor="defaultCheck13">
                <span className="rating">
                  <i className="fas fa-star full_star"></i>
                  <i className="fas fa-star full_star"></i>
                  <i className="fas fa-star full_star"></i>
                  <i className="fas fa-star full_star"></i>
                  <i className="far fa-star full_star"></i>
                </span>
              </label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck14"
              ></input>
              <label htmlFor="defaultCheck14">
                <span className="rating">
                  <i className="fas fa-star full_star"></i>
                  <i className="fas fa-star full_star"></i>
                  <i className="fas fa-star full_star"></i>
                  <i className="fas fa-star full_star"></i>
                  <i className="fas fa-star full_star"></i>
                </span>
              </label>
            </li>
          </ul>
        </div>
        <div className="filter_type">
          <h6>Options</h6>
          <ul className="m-0">
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck15"
              ></input>
              <label htmlFor="defaultCheck15">Delivery</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck16"
              ></input>
              <label htmlFor="defaultCheck16">Take Away</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck17"
              ></input>
              <label htmlFor="defaultCheck17">Distance 10Km</label>
            </li>
            <li>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck18"
              ></input>
              <label htmlFor="defaultCheck18">Distance 5Km</label>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img
          className="img-fluid"
          src="https://greekherald.com.au/wp-content/uploads/2019/11/ad25c1_9e3f16f97f8e4c1da0755c2f38e3f01d_mv2.gif"
          alt=""
        />
      </div>
    </div>
  );
};

export default FiltersComponent;
