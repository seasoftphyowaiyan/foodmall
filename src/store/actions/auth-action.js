import {
    AUTH
} from "../action_types";

const AUTH_ACTIONS = {
    login,
    logout
}

export default AUTH_ACTIONS;

function login(email, password) {
    return dispatch => {
        // dispatch({
        //     type: AUTH.LOGIN_STARTED
        // });
        fetch(
                "https://cors-anywhere.herokuapp.com/" +
                "https://apidev.kids-meal.jp/account/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    }),
                }
            )
            .then(res => res.json())
            .then(res => {
                localStorage.setItem("user", JSON.stringify(res.account_id));
                localStorage.setItem("token", res.access_token);
                console.log(res);
                dispatch({
                    type: AUTH.LOGIN_SUCCESS
                });
                window.location.href = "/shops";
            }).catch(err => {
                dispatch({
                    type: AUTH.LOGIN_FAILED,
                    payload: err.response
                })
            })
    }
}

function logout() {
    return dispatch => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        dispatch({
            type: AUTH.LOGOUT
        })
    }
}