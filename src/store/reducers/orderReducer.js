import actionTypes from '../actions/actionTypes';

const initialState = {
    Bills: [],
    orderToday: 0,
    revenueToday: 0
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        // get bill
        case actionTypes.GET_BILL:
            return {
                ...state,
                Bills: action.payload
            }

        // order today
        case actionTypes.GET_ORDER_TODAY:
            return {
                ...state,
                orderToday: action.payload
            }

        default:
            return state;

        // revenue today
        case actionTypes.REVENUE_TODAY:
            return {
                ...state,
                revenueToday: action.payload
            }
            
    }
}
export default orderReducer;