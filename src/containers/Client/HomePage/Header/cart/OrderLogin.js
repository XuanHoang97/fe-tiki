import { numberFormat, totalMoney } from 'components/Formatting/FormatNumber';
import { DeleteItemCartByUser, GetCartByUser } from 'store/actions';
import { useSelector, useDispatch } from 'react-redux';
import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { path } from 'utils';
import './style.scss';

function OrderLogin(props) {
    const dispatch = useDispatch();
    const [hoverCart, setHoverCart] = useState(false);
    const carts = useSelector(state => state.client.cartsUser);
    const user = useSelector(state => state.auth.user);

    // get cart by user
    let userId = user ? user.id : '';
    useEffect(() => {
        try {
            dispatch(GetCartByUser(userId));
        } catch (e) {
            console.log('get cart by user fail', e)
        }
    }, [dispatch, userId]);

    // delete item cart
    const deleteItemCart = (productId) => {
        dispatch(DeleteItemCartByUser(productId));
        setTimeout(() => {
            dispatch(GetCartByUser(userId));
        }, 1000)
    }

    return (
        <>
            <span className="cart nav-item dropdown active" onMouseEnter={() =>setHoverCart(true) }>
                <div className="itemCart">
                    <i className="fas fa-shopping-cart" style={{ fontSize: '17px' }}>
                        <span className="numbCart badge badge-pill badge-danger">
                            { carts?.length>0 && carts.length}
                        </span>
                    </i>
                </div>
            </span>

            {
                hoverCart &&
                <div className="dropdown-menu cart__info" onMouseLeave={()=>setHoverCart(false)}>          
                    <div className='text-left'>
                        <h6 className='text-muted'>Sản phẩm đã thêm</h6>
                        <hr />
                        {
                            carts?.length > 0 &&
                            carts.map((item,index) => {
                                return (
                                    <div className='' key={index}>
                                        <div className="info">
                                            <div className='infoCart'>
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
                                                        <span className='small m-0'> x {item.qty}</span>
                                                    </div>
                                                    <div onClick={()=> deleteItemCart(item.id)} className="btnDelProd text-danger small mt-2">Xóa</div>
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
                            {
                                carts?.length > 0 ?
                                numberFormat(totalMoney(carts))
                                : 0
                            }
                            </span>
                        </h6>
                        <Link to={`${path.CART}`} className='btn btn-success viewCart btn-sm'>Xem giỏ hàng</Link>
                    </div>
                </div>  
            }

            {
                carts.length === 0 && hoverCart &&
                <div className="dropdown-menu cart__info" onMouseLeave={()=>setHoverCart(false)}>          
                    <div>
                        <img className="w-25 mb-3" src="https://salt.tikicdn.com/desktop/img/mascot@2x.png" alt="" />
                        <p>Chưa có sản phẩm nào trong giỏ hàng</p>
                        <Link to={`${path.HOMEPAGE}`}><button type="button" className="btn btn-primary">Mua hàng</button></Link>
                    </div>        
                </div>  
            }
        </>
    );
}
export default OrderLogin;