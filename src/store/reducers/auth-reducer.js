import {
    AUTH
} from "../action_types";

let init_state = {
    auth: {
        login: false,
        token: null,
        user: {}
    }
};

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
if (token && user) {
    init_state.auth = {
        login: true,
        token: token,
        user: user
    }
}

export function authReducer(state = init_state, action) {
    switch (action.type) {
        //   case AUTH.LOGIN_STARTED:
        //     return {...state, loading: {...state.loading, login: true}};
        case AUTH.LOGIN_SUCCESS:
            return state;
        case AUTH.LOGOUT:
            return state;
        default:
            return state;
    }
}