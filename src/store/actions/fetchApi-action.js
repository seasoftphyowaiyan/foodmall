import { FETCHAPI } from '../action_types';

// const FETCH_ACTIONS = {
//     fetchShops
// }

// export default FETCH_ACTIONS;

function fetchShops() {
    return dispatch => {
        dispatch({
            type: FETCHAPI.FETCHING,
        });
        fetch('http://yeemon-food.herokuapp.com/api/shop-lists')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch({
                type: FETCHAPI.FETCH_SUCCESS,
                shops: res
            })
            return res;
        })
        .catch(error => {
            dispatch({
                type: FETCHAPI.FETCH_FAILED,
                error: error
            });
        })
    }
}

export default fetchShops;