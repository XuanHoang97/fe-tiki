import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {TabContent, TabPane } from 'reactstrap';
import { numberFormat } from 'components/Formatting/FormatNumber';

import { Nav, NavItem, NavLink } from 'reactstrap';
import './style/ProductSuggestion.scss';
import * as actions from './../../../../store/actions'
import Rate from '../Rate';

const ProductSuggestion = () => {
  const [activeTab, setActiveTab] = useState(3);

  const dispatch = useDispatch();
  const category = useSelector(state => state.admin.categories);
  const DetailCategory = useSelector(state => state.admin.detailCategory);

  useEffect(() => {
    dispatch(actions.fetchAllCategory);
    dispatch(actions.DetailCategory(3));
  }, [dispatch]);

  //detail category
  const detailCategory = (id) => {
    setActiveTab(id);
    dispatch(actions.DetailCategory(id));
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
                <div className="list d-flex">
                {
                  DetailCategory && DetailCategory.length > 0 ?
                  DetailCategory.map((item, index) => {
                    return (
                        <div className="list__prod" key={index}>
                            <img src={item.image} className='w-75' alt="" />
                            <p className="text-secondary mt-3 mb-1">{item.name}</p>
                            <Rate />

                            <div className="price">
                                <span className="price_prod">{numberFormat(item.price)}</span>
                                <span className="badge badge-danger">-6%</span>
                            </div>
                        </div>
                    )
                  })
                  :
                  <span> Loading... </span>
                }
                </div>

                <div className="view__more">
                  <button type="button" className="btn btn-outline-primary border border-primary">Xem thêm</button>
                </div>
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