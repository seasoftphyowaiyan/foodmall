import React from "react";
import reduxLogin from "../components/loginComponent/loginComponent";
import Register from "../components/registerComponent/registerComponent";
import HomePage from "../pages/homePage";
import ShopListingPage from "../pages/shopListingPage";

export const MENU_ROUTES = [{
        path: "/",
        component: HomePage,
        auth: false,
        name: 'Home',
    },
    {
        path: "/shops",
        component: ShopListingPage,
        auth: true,
        name: 'Shop Listing',
    },
    {
        path: "/register",
        component: Register,
        auth: false,
        name: 'Register',
    },
    {
        path: "/login",
        component: reduxLogin,
        auth: false,
        name: 'Login',
    },
    {
        path: "/user_profile",
        component: ShopListingPage,
        auth: true,
        name: 'User Profile',
    },
    {
        path: "/logout",
        component: reduxLogin,
        auth: true,
        name: 'Logout',
    }
]