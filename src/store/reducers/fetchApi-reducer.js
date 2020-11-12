import {
    FETCHAPI
} from "../action_types";

let init_state = {
    shops: [],
    isLoading: false,
    error: null,
};

export function fetchApiReducer(state = init_state, action) {
    switch (action.type) {
        case FETCHAPI.FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case FETCHAPI.FETCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                shops: action.shops
            };
        case FETCHAPI.FETCH_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        default:
            return state;
    }
}
