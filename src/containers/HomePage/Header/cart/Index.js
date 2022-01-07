import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartHeader(props) {
    const [hoverCart, setHoverCart] = useState(false);

    const dispatch = useDispatch()

    return (
        <>
            <span className="cart nav-item dropdown active" onMouseEnter={() =>setHoverCart(true) }>
                <div className="nav-link dropdown-toggle">
                    <i className="fas fa-shopping-cart mr-2" style={{ fontSize: '18px' }}>
                        <span className="badge badge-pill badge-warning position-absolute " style={{ top: '-5px', left: '1.4rem' }}>
                            0
                        </span>
                    </i>
                    <span>Giỏ Hàng</span>
                </div>
            </span>

            {
                hoverCart &&
                <div className="dropdown-menu cart__info p-3 text-center" onMouseLeave={()=>setHoverCart(false) }>          
                    <div>
                        <img className="w-25 mb-3" src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" alt="" />
                        <p>Chưa có sản phẩm nào trong giỏ hàng</p>
                    </div>
                            
                </div>
            }
        </>
    );
}

export default CartHeader;