import { filterPrice, getTypeSort, keywordSearch, searchResult, URLSearch } from 'store/actions';
import { Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import { numberFormat } from 'components/Formatting/FormatNumber';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Rate from '../../Section/Rate';
import Header from '../Header';
import Filter from './Filter';

function Result(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState(51);

    const keyword = useSelector(state => state.admin.keywordSearch);
    const url = useSelector(state => state.admin.urlSearch);    
    const result = useSelector(state => state.admin.dataSearch);
    const sortType = useSelector(state => state.admin.sortType);

    // Result
    useEffect(() => {
        dispatch(getTypeSort());
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

    const sort = (product) => {
        setActiveTab(product.id)
        console.log(product)
    }

    const viewDetail = (product) => {
        return history.push(`/products/${product.id}`)
    }

    return (
        <div className="bg-light">
            <Header />
            <div className="Result__search container">
                <div className="resultSearch">
                    <Filter
                        keyword={keyword}
                        priceFrom={priceFrom}
                        priceTo={priceTo}
                        setPriceFrom={setPriceFrom}
                        setPriceTo={setPriceTo}
                        filterProduct={filterProduct}
                    />

                    <div className="list__product col-md-10">
                        <div className="suggest__list">
                            <div className="result py-3">
                                <h5 className="m-0">Kết quả tìm kiếm cho 
                                    <span className='text-primary'>
                                        `{keyword ? keyword :'Undefine'}`
                                    </span>
                                    : {result?.length ? result.length : 0} <small>Kết quả</small>
                                </h5>
                            </div>
                            
                            <Nav tabs className='tabSearch'>
                                <NavItem className='d-flex'>
                                    {
                                        sortType?.length > 0 &&
                                        sortType.map((item, index) => {
                                            return (
                                                <NavLink
                                                    key={index}
                                                    className={`${activeTab === item.id ? 'active' : ''}`}
                                                    onClick={() => sort(item) }
                                                >
                                                    {item.valueVi}
                                                </NavLink>
                                            )
                                        })
                                    }
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={activeTab}>
                                <TabPane tabId={activeTab}>
                                    <div className="listResult">
                                    {
                                        loading ?
                                        <div className="loadResult">
                                            <div className="spinner-border spinner-border-sm text-primary mr-2"></div>
                                            <span className="">Loading...</span>
                                        </div>
                                        :
                                        result?.length >0 ?
                                        result.map((item, index) => {
                                            return (
                                                <div onClick={()=> viewDetail(item)} className="result" key={index}>
                                                    <div>
                                                        <img src={item.image} className="w-75" alt="" style={{height: '100px'}} />
                                                        <p className="text-secondary mt-3 mb-1">{item.name}</p>
                                                        <Rate />
                                                        <div className="price">
                                                            <span className="price_prod">{numberFormat(item.sale)}</span>
                                                            <span className="badge badge-danger">-5%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        :
                                            `Không có sản phẩm nào, gợi ý: iphone, samsung, nokia, vivo ...`
                                    }
                                    </div>
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Result;