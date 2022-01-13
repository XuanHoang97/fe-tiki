import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { path } from 'utils';
import * as actions from "store/actions";


function Order(props) {
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1);
    const history = useHistory()

    const buyNow = () => {
        dispatch(actions.AddToCart());
        setQty(1);

        // history.push(`${path.CART}`);
    }

    return (
        <> 
            <div>
                <div className="text-danger">
                    <img className="w-25" src="http://techshop-ecommerce.surge.sh/static/media/policy-image.62c1167a.png" alt="" />
                </div>

                <div className="option">
                    <small>Số lượng:</small>
                    <div className="input-group col-md-3 pt-2 col-6 p-0">
                        <div onClick={()=>setQty(qty - 1)} className="input-group-prepend">
                            <button className="btn btn-secondary btn-sm px-2"><i className="fas fa-minus small" /></button>
                        </div>

                        <input type="text" readOnly className="form-control text-center" style={{ height: '31px' }}
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                        />

                        <div onClick={()=>setQty(qty + 1)} className="input-group-append">
                            <button className="btn btn-secondary btn-sm px-2"><i className="fas fa-plus small" /></button>
                        </div>
                    </div>

                    <div className='d-flex mt-5 align-items-center' style={{gap: '10px'}}>
                        <button onClick={()=>buyNow()} type="button" className="btn btn-danger font-weight-normal" style={{height: '40px', width:'50%'}}>
                            <i className="fas fa-shopping-cart mr-2" />
                            MUA NGAY
                        </button>
                        
                        <button type="button" className="btn btn-success font-weight-normal" style={{height: '40px', width:'50%'}}>
                            <i className="fas fa-user mr-2" />
                            ĐĂNG NHẬP MUA HÀNG
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Order;