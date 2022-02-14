import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header';
import Filter from './Filter';
import Sort from './Sort';
import * as actions from './../../../../store/actions'
import Rate from 'containers/HomePage/Section/Rate';
import { numberFormat } from 'components/Formatting/FormatNumber';

function Result(props) {
    const dispatch = useDispatch();
    const keyword = useSelector(state => state.admin.keywordSearch);
    const url = useSelector(state => state.admin.urlSearch);    
    const result = useSelector(state => state.admin.dataSearch);
    const [loading, setLoading] = useState(false);
    
    // Result
    useEffect(() => {
        dispatch(actions.keywordSearch(keyword));
        dispatch(actions.urlSearch(url));

        setLoading(true);
        setTimeout(() => {
            dispatch(actions.searchResult(keyword));
            setLoading(false);
        }, 1000);
    }, [dispatch, keyword, url]);

    console.log('keyword:', keyword);
    console.log('url:', url);
    console.log('result:', result);

    useEffect(() => {
        document.title = `${keyword} giá rẻ bất ngờ`;
    }, [keyword]);

    // Filter 
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(0);

    const handleFilterProduct = (e) => {
        dispatch(actions.filterProductByPrice(keyword, priceFrom, priceTo));
    }

    return (
        <div className="bg-light">
            <Header />
            <div className="Result__search container py-3">
                <div className="product bg-white d-flex">
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

                    <div className="list__product col-10">
                        <div className="suggest__list">
                            <div>
                                <div >
                                    <div className="result py-3">
                                        <h5 className="m-0">Kết quả tìm kiếm cho 
                                            <span className='text-primary'>
                                                `{keyword ? keyword :'Undefine'}`
                                            </span>
                                            :{result.length} <small>Kết quả</small>
                                        </h5>
                                    </div>
                                    <Sort />
                                </div>
                            </div>

                            <div className="tab-content">
                                <div id="home" className="container tab-pane active"><br />
                                    <div className="list row">
                                    {
                                        loading ?
                                        <div className="d-flex justify-content-center w-100 bg-light">
                                            <div className="spinner-border spinner-border-sm text-primary mr-2"></div>
                                            <span className="">Loading...</span>
                                        </div>
                                        :
                                        result && result.length >0 ?
                                        result.map((item, index) => {
                                            return (
                                                <div className="list__prod" key={index}>
                                                    <div>
                                                        <img src={item.image} className="w-75" alt="" />
                                                        <p className="text-secondary mt-3 mb-1">{item.name}</p>
                                                        <Rate />
                                                        <div className="price">
                                                            <span className="price_prod">{numberFormat(item.price)}</span>
                                                            <span className="badge badge-danger">-6%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                        <div className="">
                                            Không có kết quả nào, vui lòng tìm kiếm từ khoá khác
                                        </div>
                                    }

                                    </div>
                                </div>

                                <div id="menu1" className="container tab-pane fade"><br />
                                    <h6>Menu 1</h6>
                                </div>

                                <div id="menu2" className="container tab-pane fade"><br />
                                    <h6>Menu 2</h6>
                                </div>

                                <div id="menu3" className="container tab-pane fade"><br />
                                    <h6>Menu 3</h6>
                                </div>

                                <div id="menu4" className="container tab-pane fade"><br />
                                    <h6>Menu 4</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Result;