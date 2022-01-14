import actionTypes from './actionTypes';

//QUANTITY
export const countProduct = (numberCart) => {
    return ({
        type: actionTypes.NUMBER_CART,
        numberCart
    })
}

export const increment = () => {
    return ({
        type: actionTypes.INCREMENT_QUANTITY
    })
}

export const decrement = () => {
    return ({
        type: actionTypes.DECREMENT_QUANTITY
    })
}

//Add to cart
export const addToCart = (payload) => {
    return ({
        type: actionTypes.ADD_TO_CART,
        payload
    })
}

//Delete to cart
export const deleteItemCart = (id) => {
    return ({
        type: actionTypes.DELETE_CART,
        payload: id
    })
}


