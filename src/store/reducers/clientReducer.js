import actionTypes from '../actions/actionTypes';

const initialState = {
    carts: [],
    qty: 1,
}

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        //QUANTITY
        case actionTypes.NUMBER_CART:
            return {
                ...state,
                qty: action.numberCart
            }

        case actionTypes.INCREMENT_QUANTITY:
            return {
                ...state,
                qty: state.qty + 1
            }

        case actionTypes.DECREMENT_QUANTITY:
            return {
                ...state,
                qty: state.qty - 1
            }
 
        //Get all cart
        case actionTypes.FETCH_ALL_CART_SUCCESS:
            return {
                ...state,
                carts: action.dataCart
            }

        case actionTypes.FETCH_ALL_CART_FAILED:
            return {
                ...state,
                carts: []
            }


        default:
            return state;
    }
}

export default clientReducer;