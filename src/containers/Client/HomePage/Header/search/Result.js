import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { numberFormat } from 'components/Formatting/FormatNumber';
import { filterPrice, keywordSearch, searchResult, URLSearch } from 'store/actions';
import { Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import Rate from '../../Section/Rate';
import Header from '../Header';
import Filter from './Filter';

function Result(props) {
    const dispatch = useDispatch();
    const keyword = useSelector(state => state.admin.keywordSearch);
    const url = useSelector(state => state.admin.urlSearch);    
    const result = useSelector(state => state.admin.dataSearch);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('1');
    
    // Result
    useEffect(() => {
        dispatch(keywordSearch(keyword));
        dispatch(URLSearch(url));

        setLoading(true);
        setTimeout(() => {
            dispatch(searchResult(keyword));
            setLoading(false);
        }, 1000);
    }, [dispatch, keyword, url]);

    useEffect(() => {
        document.title = `${keyword} giá rẻ bất ngờ`;
    }, [keyword]);

    // Filter 
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');
    const filterProduct = (e) => {
        dispatch(filterPrice(keyword, priceFrom, priceTo));
    }

    return (
        <div className="bg-light">
            <Header />
            <div className="Result__search container py-3">
                <div className="product bg-white d-flex">
                    <Filter
                        keyword={keyword}
                        priceFrom={priceFrom}
                        priceTo={priceTo}
                        setPriceFrom={setPriceFrom}
                        setPriceTo={setPriceTo}
                        filterProduct={filterProduct}
                    />

                    <div className="list__product col-10">
                        <div className="suggest__list">
                            <div>
                                <div className="result py-3">
                                    <h5 className="m-0">Kết quả tìm kiếm cho 
                                        <span className='text-primary'>
                                            `{keyword ? keyword :'Undefine'}`
                                        </span>
                                        : {result.length} <small>Kết quả</small>
                                    </h5>
                                </div>
                                
                                <Nav tabs className='mb-4'>
                                    <NavItem className='d-flex'>
                                        <NavLink className={activeTab === '1' ? 'active' : ''}
                                            onClick={() => {
                                                setActiveTab('1');
                                            }}
                                        >
                                            <span className='mr-2'>Phổ biến</span>
                                        </NavLink>

                                        <NavLink className={activeTab === '2' ? 'active' : ''}
                                            onClick={() => {
                                                setActiveTab('2');
                                            }}
                                        >
                                            <span className='mr-2'>Bán chạy</span>
                                        </NavLink>

                                        <NavLink className={activeTab === '3' ? 'active' : ''}
                                            onClick={() => {
                                                setActiveTab('3');
                                            }}
                                        >
                                            <span className='mr-2'>Giá thấp</span>
                                        </NavLink>

                                        <NavLink className={activeTab === '4' ? 'active' : ''}
                                            onClick={() => { setActiveTab('4'); }}
                                        >
                                            <span className='mr-2'>Giá cao</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>

                            <TabContent activeTab={activeTab}>
                                <TabPane tabId='1'>
                                    <div className="list d-flex">
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
                                                        <img src={item.image} className="w-75" alt="" style={{height: '100px'}} />
                                                        <p className="text-secondary mt-3 mb-1">{item.name}</p>
                                                        <Rate />
                                                        <div className="price">
                                                            <span className="price_prod">{numberFormat(item.price)}</span>
                                                            <span className="badge badge-danger">-5%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                        <div className="">
                                            Không có kết quả nào, Bạn có thể quan tâm: iphone, samsung, vertu...
                                        </div>
                                    }
                                    </div>
                                </TabPane>
                                <TabPane tabId='2'> 456 </TabPane>
                                <TabPane tabId='3'>789</TabPane>
                                <TabPane tabId='4'>012</TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Result;