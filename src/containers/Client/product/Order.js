import React from 'react';
import { useDispatch } from 'react-redux';

function Order(props) {
    const dispatch = useDispatch()

    return (
        <> 
            <div>
                <div className="text-danger">
                    <img className="w-25" src="http://techshop-ecommerce.surge.sh/static/media/policy-image.62c1167a.png" alt="" />
                </div>

                <div className="option">
                    <div className='my-2'>
                        <span><small className='mr-3'>Chọn màu:</small></span>
                    
                        <button className="btn btn-outline-success border border-success px-3 text-dark">Đen</button>
                        <button className="btn btn-outline-success border border-success px-3 text-dark mx-3">Vàng</button>
                        <button className="btn btn-outline-success border border-success px-3 text-dark">Xanh</button>
                    </div>

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

                    <div className='d-flex mt-5 align-items-center' style={{gap: '10px'}}>
                        <button type="button" className="btn btn-danger" style={{height: '40px', width:'50%'}}>
                            <i className="fas fa-shopping-cart mr-2" />
                            MUA NGAY
                        </button>
                        
                        <button type="button" className="btn btn-success" style={{height: '40px', width:'50%'}}>
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