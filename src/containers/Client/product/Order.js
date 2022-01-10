import React from 'react';
import { useDispatch } from 'react-redux';
import OptionProd from './OptionProd';

function Order(props) {
    const dispatch = useDispatch()

    return (
        <div>
            <div className="text-danger">
                <img className="w-25" src="http://techshop-ecommerce.surge.sh/static/media/policy-image.62c1167a.png" alt="" />
            </div>

            <div className="option">
                <OptionProd />
                <small>Số lượng:</small>
                <div className="input-group col-md-3 pt-2 col-6 p-0">
                    <div className="input-group-prepend">
                        <button className="btn btn-success btn-sm px-2"><i className="fas fa-minus small" /></button>
                    </div>

                    <input type="text" min="1" readOnly className="form-control text-center" style={{ height: '31px' }} />

                    <div className="input-group-append">
                        <button className="btn btn-success btn-sm px-2"><i className="fas fa-plus small" /></button>
                    </div>
                </div>

                <button type="button" className="btn btn-success btn-md btn-block mt-5">
                    Thêm vào giỏ hàng
                </button>

            </div>
        </div>
    );
}

export default Order;