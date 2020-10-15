import React from "react";
import { Link } from "react-router-dom";
import { MENU_ROUTES } from "../../routes/routes";
import PrivateLink from "../privateRouteComponent/privateLinkComponent";

const NavbarComponent = () => {
  console.log(localStorage.getItem("user"));
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: "#78cfcf" }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">
        Navbar
      </a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          {MENU_ROUTES.map((route, index) => {
            return route.auth ? (
              <li
                key={index}
                className={`nav-item active ${
                  localStorage.getItem("user") && localStorage.getItem("token")
                    ? ""
                    : null
                }`}
              >
                <PrivateLink to={route.path} className="nav-link">
                  {route.name}
                </PrivateLink>
              </li>
            ) : (
              <li
                key={index}
                className={`nav-item active ${
                  localStorage.getItem("user") && localStorage.getItem("token")
                    ? "d-none"
                    : null
                }`}
              >
                <Link to={route.path} className="nav-link">
                  {route.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavbarComponent;
