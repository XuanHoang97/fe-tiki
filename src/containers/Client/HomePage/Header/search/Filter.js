import React from 'react';
import { useDispatch } from 'react-redux';
import { filterProductByPrice } from 'store/actions';
import './style.scss';

function Filter(props) {
    const {keyword, priceFrom, priceTo, setPriceFrom, setPriceTo, handleFilterProduct} = props;
    const dispatch = useDispatch();
    const minPrice = 1000000;

    return (

        <div className="sort col-2 border-right">
            <div className="addr border-bottom py-3">
                <h6>ĐỊA CHỈ NHẬN HÀNG</h6>
                <div className='font-weight-bold'>Ba Đình, Hà Nội</div>
                <div className="text-primary"> Đổi địa chỉ</div>
            </div>

            <div className="price border-bottom py-3">
                <h6>GIÁ CẢ</h6>
                <div className="item__price" onClick={()=>dispatch(filterProductByPrice(keyword, minPrice, priceFrom, priceTo))}>
                    <span>Dưới 1.000.000</span>
                </div>

                <div className="item__price" onClick={()=>dispatch(filterProductByPrice(keyword,0, 1000000, 5000000))}>
                    <span>Từ 1.000.000 - 5.000.000</span>
                </div>

                <div className="item__price" onClick={()=>dispatch(filterProductByPrice(keyword,0, 5000000, 10000000))}>
                    <span>Từ 5.000.000 - 10.000.000</span>
                </div>

                <div className="item__price">
                    <span>Trên 10.000.000</span>
                </div>

                {/* between price */}
                <div className="mt-4">Khoảng giá</div>
                <div className="form-group d-flex">
                <input type="text" className="priceBetween form-control col-6" placeholder='0'
                    value={priceFrom}
                    onChange={(e) => setPriceFrom(e.target.value.replace(/[^0-9]/g, ''))}
                />

                <input type="text" className="priceBetween form-control col-6" placeholder='0'
                    value={priceTo}
                    onChange={(e) => setPriceTo(e.target.value.replace(/[^0-9]/g, ''))}
                />
                </div>
                <button onClick={()=> handleFilterProduct()} type="button" className="findProd btn btn-warning">Áp dụng</button>
            </div>

            <div className="address border-bottom py-3">
                <h6>NƠI BÁN</h6>
                <div className="item__address">
                    <input type="checkbox"/>
                    <span>Hà Nội</span>
                </div>

                <div className="item__address">
                    <input type="checkbox"/>
                    <span>TP. HCM</span>
                </div>
            </div>
        </div>
    );
}

export default Filter;