import React, {useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { numberFormat, totalMoney } from 'components/Formatting/FormatNumber';
import ModalOrderNow from 'containers/Client/product/ModalOrderNow';
import { Link } from 'react-router-dom';
import { path } from 'utils';
import * as actions from '../../../../store/actions/index';

function OrderWithoutLogin(props) {
    const [hoverCart, setHoverCart] = useState(false);
    const [orderNow, setOrderNow] = useState(false)

    const dispatch = useDispatch();
    const carts = useSelector(state => state.client.carts);

    //delete item cart
    const deleteItemCart = (id) => {
        dispatch(actions.deleteItemCart(id))
    }

    //viewCart
    const viewCart = (data) => {
        setOrderNow(!orderNow)
    }

    return (
        <>
            <ModalOrderNow show={orderNow} toggle = {viewCart} />
            <span className="cart nav-item dropdown active" onMouseEnter={() =>setHoverCart(true) }>
                <div className="nav-link dropdown-toggle">
                    <i className="fas fa-shopping-cart mr-2" style={{ fontSize: '17px' }}>
                        <span className="badge badge-pill badge-danger position-absolute " style={{ top: '-5px', left: '1.4rem' }}>
                            {carts.length}
                        </span>
                    </i>
                    <span>Giỏ Hàng</span>
                </div>
            </span>

            {
                hoverCart &&
                <div className="dropdown-menu cart__info p-3 text-center" onMouseLeave={()=>setHoverCart(false)}>          
                    <div className='text-left'>
                        <h6 className='text-muted'>Sản phẩm đã thêm</h6>
                        <hr />
                        {
                            carts && carts.length > 0 &&
                            carts.map((item,index) => {
                                return (
                                    <div className='' key={index} >
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
                                                        <span className='small m-0'> x{item.qty}</span>
                                                    </div>
                                                    <div onClick={() => deleteItemCart(item.id)} className="btnDelProd text-danger small mt-2">Xóa</div>
                                                </div>
                                            </div>
                                            <hr />
                                        </div>                                   
                                    </div>
                                )
                            })
                        }
                        <h6>Tổng tiền :
                            <span className='ml-3 font-weight-bold text-danger'>
                                {numberFormat(totalMoney(carts))}
                            </span>
                        </h6>
                        <button onClick={viewCart} className='btn btn-success btn-sm w-100 mt-2 font-weight-bold'>Xem giỏ hàng</button>
                    </div>
                </div>  
            }

            {
                carts.length === 0 && 
                hoverCart &&
                <div className="dropdown-menu cart__info p-3 text-center" onMouseLeave={()=>setHoverCart(false)}>          
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
export default OrderWithoutLogin;