import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../store/actions";
import { path } from '../../../utils';

export default function Category() {
  const [detailMenu, setDetailMenu] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);
  const [hoverSubMenu, setHoverSubMenu] = useState(false);

  const dispatch = useDispatch();
  const category = useSelector(state => state.admin.categories); 

  useEffect(() => {
    dispatch(actions.fetchAllCategory());
  }, [dispatch]);

  const viewDetailMenu = () => {
    setDetailMenu(!detailMenu);
  };

  return (
    <>
      <li className="menu_ctg nav-item dropdown mr-2 active"
        onMouseEnter={() => setHoverMenu(true)}
      >
        <Link className="category nav-link dropdown-toggle" to={path.HOMEPAGE}
          style={{ padding: '10px 15px' }}>
          <i className="fas fa-bars mr-2" />
          <small>Danh mục</small>
          <br />
          <span style={{ fontSize: '15px' }}>Sản phẩm</span>
        </Link>
      </li>

      {
        hoverMenu &&
        <div className="dropdown-menu list__product col-12 d-flex"
          onMouseLeave={() => setHoverMenu(false)}
        >
          <div className="col-3 p-0 border-right">
            { category.map((item, index) => {
              return (
                  <div className="dropdown-item drop__menu d-flex align-items-center py-2 px-3 bg-light" 
                    style={{ cursor: 'pointer' }}
                    key={index} 
                    onMouseEnter={() => viewDetailMenu(item)}
                  >
                    <img className="col-1 px-0 mr-2 rounded-circle"  src={item.image} alt="img slide" />
                    <div style={{fontSize: '13px'}}>{item.name}</div>
                  </div>
              );
            })}
          </div>
          
          {
            hoverSubMenu &&
            <div className="menu__item d-flex col-9">
              <div className="col-3">
                <span className="text-primary">product1</span>
                
              </div>

              <div className="col-3">
                <span className="text-primary">product2</span>
              </div>

              <div className="col-3">
                <span className="text-primary">product3</span>
              </div>

              <div className="col-3">
                <span className="text-primary">product4</span>
              </div>
            </div>
          }
        </div>
      }
    </>
  )
}
