import actionTypes from '../actions/actionTypes';

const initialState = {
    Bills: [],
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        // get bill
        case actionTypes.GET_BILL:
            return {
                ...state,
                Bills: action.payload
            }

        default:
            return state;
    }
}
export default orderReducer;