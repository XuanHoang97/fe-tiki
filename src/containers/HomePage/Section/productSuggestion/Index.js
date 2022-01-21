import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {TabContent, TabPane } from 'reactstrap';

import { Nav, NavItem, NavLink } from 'reactstrap';
import './style/ProductSuggestion.scss';
import * as actions from './../../../../store/actions'
import Rate from '../Rate';

const ProductSuggestion = () => {
  const [activeTab, setActiveTab] = useState(3);

  const dispatch = useDispatch();
  const category = useSelector(state => state.admin.categories);
  const DetailCategory = useSelector(state => state.admin.detailCategory);
  console.log(DetailCategory)
  useEffect(() => {
    dispatch(actions.fetchAllCategory);

    dispatch(actions.DetailCategory(3));
  }, [dispatch]);

  //detail category
  const detailCategory = (id) => {
    setActiveTab(id);
    dispatch(actions.DetailCategory(id));

    console.log('view detail tab suggest:' , id, DetailCategory );
  }

  return (
    <div className="suggest__list mt-4">
      <div style={{ position: 'sticky', top: '0' }}>
        <div className="Prod__Suggest"> <h5 className="m-0">Gợi Ý Hôm Nay</h5> </div>
        <Nav tabs className='tab_product'>
          {
            category && category.length > 0 ?
            category.map((item, index) => {
                return (
                    <NavItem key={index} className='item-category'>
                        <NavLink
                            className={`${activeTab === item.id ? 'active' : ''}`}
                            onClick={() => detailCategory(item.id)}
                        >   
                          <img src={item.image}  alt="" />{item.name}
                        </NavLink>
                    </NavItem>
                )
            })
            :
            <span> Loading... </span>
          }
        </Nav>
      </div>

      <TabContent activeTab={activeTab} className='py-4 px-3 bg-light border bg-white'>
        {
          category && category.length > 0 ?
          category.map((item, index) => {
            return (
              <TabPane tabId={item.id} key={index}>
                {
                  DetailCategory && DetailCategory.length > 0 ?
                  DetailCategory.map((item, index) => {
                    return (
                      <div className='item-product' key={index}>
                        <div className='img-product'>
                          <img src={item.image} alt="" />
                        </div>
                        <div className='info-product'>
                          <div className='name-product'>
                            <h5>{item.name}</h5>
                          </div>
                          <div className='price-product'>
                            <span>{item.price}</span>
                          </div>
                          <div className='rate-product'>
                            <Rate />
                          </div>
                        </div>
                      </div>
                    )
                  })
                  :
                  <span> Loading... </span>

                }
                {/* <div className="list">
                  <div className="list__prod">
                      <img src={"https://salt.tikicdn.com/cache/w200/ts/product/58/ec/8a/117d32e6848e12d3074a51654f2a997f.jpg.webp"} alt="" />
                      <p className="text-secondary mt-3 mb-1">Dầu gội X-Men For Boss Luxury - Hương trầm sang trọng 650g</p>
                      <Rate />

                      <div className="price">
                          <span className="price_prod">185.000 đ</span>
                          <span className="badge badge-danger">-6%</span>
                      </div>
                  </div>
                </div>

                <div className="view__more">
                  <button type="button" className="btn btn-sm btn-outline-primary border">Xem thêm</button>
                </div> */}
              </TabPane>
            )
          })
          :
          <span> Loading... </span>
        }
      </TabContent>
    </div>

  );
}
export default ProductSuggestion;