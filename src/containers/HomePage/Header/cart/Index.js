import { numberFormat, totalMoney } from 'components/Formatting/FormatNumber';
import React, {useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteItemCart } from 'store/actions';
import { path } from 'utils';

function CartHeader(props) {
    const [hoverCart, setHoverCart] = useState(false);

    const dispatch = useDispatch();
    const Cart = useSelector(state => state.client.carts)
    const handleDelete = (id) => {
        dispatch(deleteItemCart(id))
    }

    return (
        <>
            <span className="cart nav-item dropdown active" onMouseEnter={() =>setHoverCart(true) }>
                <div className="nav-link dropdown-toggle">
                    <i className="fas fa-shopping-cart mr-2" style={{ fontSize: '18px' }}>
                        <span className="badge badge-pill badge-warning position-absolute " style={{ top: '-5px', left: '1.4rem' }}>
                            {Cart.length}
                        </span>
                    </i>
                    <span>Giỏ Hàng</span>
                </div>
            </span>

            {
                Cart && Cart.length > 0 ?
                hoverCart &&
                Cart.map((item, index) => {
                    return (
                        <div className="dropdown-menu cart__info p-3 text-center" onMouseLeave={()=>setHoverCart(false) } key={index}>          
                            <div>
                                <div className='text-left'>
                                    <h6 className='text-muted'>Sản phẩm đã thêm</h6>
                                    <hr />
                                    <div className="info">
                                        <div className='d-flex justify-content-between align-items-start'>
                                            <div className="col-md-2 p-0">
                                                <img className="w-100 rounded" src={item.image} alt="" />
                                            </div>

                                            <div className="col-md-6 mt-1 pl-2 p-0 content">
                                                <small>{item.name}</small>
                                                <div className='text-muted small mt-3'>Trả góp 0% - Tặng phụ kiện - Voucher 5% </div>
                                            </div>

                                            <div className="col-md-4 p-0 price">
                                                <div className="p-0 price__num">
                                                    <h6 className='small text-danger m-0'>{numberFormat(item.price)}</h6>
                                                    <span className='small m-0'> x{item.count}</span>
                                                </div>
                                                <div onClick={() => handleDelete(item.id)} className="btnDelProd text-danger small mt-2">Xóa</div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>

                                    <h6>Tổng cộng:
                                        <span className='ml-3 font-weight-bold text-danger'>
                                            {numberFormat(totalMoney(Cart))}
                                        </span>
                                    </h6>

                                    <Link to={`${path.CART}`}>
                                        <button className='btn btn-success btn-sm w-100 mt-2 font-weight-bold'>Xem giỏ hàng</button>
                                    </Link>
                                </div>
                            </div>          
                        </div>
                    )
                })
                :
                hoverCart &&
                <div className="dropdown-menu cart__info p-3 text-center" onMouseLeave={()=>setHoverCart(false) }>          
                    <div>
                        <img className="w-25 mb-3" src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" alt="" />
                        <p>Chưa có sản phẩm nào trong giỏ hàng</p>
                        <Link to={`${path.HOMEPAGE}`}><button type="button" className="btn btn-primary px-4">Mua hàng</button></Link>
                    </div>        
                </div>
            }
        </>
    );
}

export default CartHeader;