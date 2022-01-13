import actionTypes from '../actions/actionTypes';

const initialState = {
    carts: [],
}

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        //get all cart
        case actionTypes.FETCH_ALL_CART_SUCCESS:
            state.carts = action.listCart;
            return {
                ...state,
            }

        case actionTypes.FETCH_ALL_CART_FAILED:
            state.carts = [];
            return {
                ...state,
            }



        default:
            return state;
    }
}

export default clientReducer;