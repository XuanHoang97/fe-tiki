import actionTypes from '../actions/actionTypes';

const initialState = {
    rate: [],
}

const ratingReducer = (state = initialState, action) => {
    switch (action.type) {
        // fetch all rating
        case actionTypes.FETCH_ALL_RATING:
            return {
                ...state,
                rate: action.payload
            }

        default:
            return state;
    }
}
export default ratingReducer;