import { fetchSupplierProduct, getAllRangePrice, filterPrice } from 'store/actions';
import { numberFormat } from 'components/Formatting/FormatNumber';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import './style.scss';

function Filter(props) {
    const dispatch = useDispatch();
    const {keyword, priceFrom, priceTo, setPriceFrom, setPriceTo, filterProduct} = props;

    // fetch data
    const [activePrice, setActivePrice] = useState();
    const suppliers = useSelector(state => state.admin.supplier);
    const rangePrice = useSelector(state => state.admin.rangePrice);
    useEffect(() => {
        dispatch(fetchSupplierProduct());
        dispatch(getAllRangePrice());
        dispatch(filterPrice(keyword));
        setActivePrice()
    }, [dispatch, keyword]);

    // filter by price
    const filterProd = (price) => {
        let priceFrom = price.valueFrom;
        let priceTo = price.valueTo;
        setActivePrice(price.id);
        dispatch(filterPrice(keyword, priceFrom, priceTo));
    }

    return (
        <div className="filterSearch col-md-2">
            <div className="addrReceive">
                <h6>ĐỊA CHỈ NHẬN HÀNG</h6>
                <div className='font-weight-bold'>Ba Đình, Hà Nội</div>
                <div className="text-primary"> Đổi địa chỉ</div>
            </div>

            <div className="filterPrice">
                <h6>GIÁ CẢ</h6>
                {
                    rangePrice?.length > 0 &&
                    rangePrice.map((item, index) => {
                        let priceFrom = (item.valueFrom);
                        let priceTo = (item.valueTo);
                        return (
                            <div className={`item__price 
                                ${item.id === activePrice ? 'activePrice' : ''}
                                }`} key={index}
                                onClick={() => filterProd(item)}
                            >
                                <span>
                                    { !(priceFrom) ? 'Dưới ' + numberFormat(priceTo) : '' }
                                    { (priceTo===100000000) ? 'Trên ' + numberFormat(priceFrom) : '' }
                                    { priceFrom && priceTo < 100000000 ? 'Từ' + '\xa0' + (priceFrom) : '' }
                                    { priceFrom && priceTo < 100000000 ? '-' + '\xa0' +  (priceTo) : '' }
                                </span>
                            </div>
                        )
                    })
                }
                <div className="mt-4">Khoảng giá</div>
                <div className="form-group d-flex">
                    <input type="text" className="priceBetween form-control col-6" placeholder='0 đ'
                        value={priceFrom}
                        onChange={(e) => setPriceFrom(e.target.value.replace(/[^0-9]/g, ''))}
                    />

                    <input type="text" className="priceBetween form-control col-6" placeholder='0 đ'
                        value={priceTo}
                        onChange={(e) => setPriceTo(e.target.value.replace(/[^0-9]/g, ''))}
                    />
                </div>
                <button onClick={()=> filterProduct()} type="button" className="findProd btn btn-warning">Áp dụng</button>
            </div>

            <div className="provider">
                <h6>NƠI BÁN</h6>
                {
                    suppliers?.length >0 ?
                    suppliers.map((item, index) => {
                        return (
                            <div className="item__address" key={index}>
                                <input type="checkbox"
                                />
                                <span>{item.valueVi}</span>
                            </div>
                        )
                    })
                    : <div>Không có nhà cung cấp</div>
                }
            </div>
        </div>
    );
}
export default Filter;