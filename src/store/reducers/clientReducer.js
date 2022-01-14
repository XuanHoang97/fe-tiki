import actionTypes from '../actions/actionTypes';
import { toast } from 'react-toastify';

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

        //Add to cart
        case actionTypes.ADD_TO_CART:
            const { id, count } = action.payload
            let { carts } = state;
            const index1 = carts.findIndex(item => item.id === id);
            let newArr
            if (index1 !== -1) {
                carts.map(item => {
                    if (item.id === id) {
                        newArr = [...carts.slice(0, index1), {
                            ...item,
                            count: count + item.count
                        }, ...carts.slice(index1 + 1)]
                        return 0;
                    } else {
                        return 0;
                    }
                })
                carts = [...newArr]
            } else {
                carts.push(action.payload)
            }
            toast.success('Sản phẩm đã được thêm vào giỏ hàng');
            return {
                ...state,
                carts: [...carts]
            }

        //Delete to cart
        case actionTypes.DELETE_CART:
            const index = state.carts.findIndex(item => item.id === action.payload)
            state.carts.splice(index, 1)
            localStorage.setItem('dataCart', JSON.stringify(state.carts))
            toast.success('Xoá sản phẩm thành công');
            return {
                ...state,
                carts: [...state.carts]
            }
    
        default:
            return state;
    }
}

export default clientReducer;