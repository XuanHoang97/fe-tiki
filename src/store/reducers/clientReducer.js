import actionTypes from '../actions/actionTypes';

const initialState = {
    carts: [],
    qty: 1,
    delivery: [],
    payment: [],
    orders: [],
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

            //get all delivery
        case actionTypes.FETCH_ALL_DELIVERY_SUCCESS:
            return {
                ...state,
                delivery: action.dataDelivery
            }

        case actionTypes.FETCH_ALL_DELIVERY_FAILED:
            return {
                ...state,
                delivery: []
            }

            //get all payment
        case actionTypes.FETCH_ALL_PAYMENT_SUCCESS:
            return {
                ...state,
                payment: action.dataPayment
            }

        case actionTypes.FETCH_ALL_PAYMENT_FAILED:
            return {
                ...state,
                payment: []
            }

        //get all order
        case actionTypes.FETCH_ALL_ORDER_SUCCESS:
            return {
                ...state,
                orders: action.dataOrder
            }

        case actionTypes.FETCH_ALL_ORDER_FAILED:
            return {
                ...state,
                orders: []
            }



        default:
            return state;
    }
}

export default clientReducer;