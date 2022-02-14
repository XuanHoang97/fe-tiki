import React, { useEffect, useState } from 'react';
import './style.scss'
import {useDispatch, useSelector} from 'react-redux';
import * as actions from './../../../../store/actions';

function Filter(props) {
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(0);
    const dispatch = useDispatch();
    const filterProduct = useSelector(state => state.admin.filterProduct);
    const keyword = useSelector(state => state.admin.keywordSearch);

    useEffect(() => {
        dispatch(actions.filterProductByPrice(keyword, priceFrom, priceTo));
    }, []);

    const handleFilterProduct = (e) => {
        dispatch(actions.filterProductByPrice(keyword, priceFrom, priceTo));
    }

    console.log('filterProduct:', filterProduct);


    return (
        <div className="sort col-2 border-right">
            <div className="addr border-bottom py-3">
                <h6>ĐỊA CHỈ NHẬN HÀNG</h6>
                <div className='font-weight-bold'>Ba Đình, Hà Nội</div>
                <div className="text-primary"> Đổi địa chỉ</div>
            </div>

            <div className="price border-bottom py-3">
                <h6>GIÁ CẢ</h6>
                <div className="item__price">
                    <span>Dưới 1.000.000</span>
                </div>

                <div className="item__price">
                    <span>Từ 1.000.000 - 5.000.000</span>
                </div>

                <div className="item__price">
                    <span>Từ 5.000.000 - 10.000.000</span>
                </div>

                <div className="item__price">
                    <span>Trên 10.000.000</span>
                </div>

                {/* between price */}
                <div className="text-primary mt-3">Khoảng giá</div>
                <div className="form-group d-flex">
                  <input type="text" className="form-control col-6" 
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value)}
                  />
                  <input type="text" className="form-control col-6" 
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value)}
                  />
                </div>
                <button onClick={()=> handleFilterProduct()} type="button" className="btn btn-primary px-3">Tìm</button>
            </div>

            <div className="address border-bottom py-3">
                <h6>NƠI BÁN</h6>
                <div className="item__address">
                    <input type="checkbox"/>
                    <span>Hà Nội</span>
                </div>
            </div>
        </div>
    );
}

export default Filter;