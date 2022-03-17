import actionTypes from '../actions/actionTypes';

const initialState = {
    vouchers: [],
}

const discountReducer = (state = initialState, action) => {
    switch (action.type) {

        // get all discount
        case actionTypes.FETCH_ALL_DISCOUNT:
            return {
                ...state,
                vouchers: action.payload
            }

        default:
            return state;
    }
}
export default discountReducer;