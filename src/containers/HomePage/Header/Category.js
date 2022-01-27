import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { path } from '../../../utils';
import * as actions from "../../../store/actions";

export default function Category() {
  const [detailMenu, setDetailMenu] = useState(false);
  const [hoverMenu, setHoverMenu] = useState(false);
  const [hoverSubMenu, setHoverSubMenu] = useState(false);

  const dispatch = useDispatch();
  const category = useSelector(state => state.admin.categories); 
  const DetailCategory = useSelector(state => state.admin.detailCategory);

  useEffect(() => {
    dispatch(actions.fetchAllCategory());
  }, [dispatch]);

  const viewDetailMenu = (id) => {
    setDetailMenu(!detailMenu);
    dispatch(actions.DetailCategory(id));
  };

  const viewDetailCategory = (id) => {
    // setDetailMenu(!detailMenu);
  };

  return (
    <React.Fragment>
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
                    key={index} 
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => viewDetailMenu(item.id)}
                  >
                    <img className="col-1 px-0 mr-2 rounded-circle"  src={item.image} alt="img slide" />
                    <div style={{fontSize: '13px'}}>{item.name}</div>
                  </div>
              );
            })}
          </div>

          <div className="menu__item col-9 p-0" style={{background: '#ebf7ff'}}>
            {
              detailMenu &&
              <div className="d-flex p-0">
                {
                  DetailCategory && DetailCategory.length > 0 ?
                  DetailCategory.map((item, index) => {
                    return (
                      <div className="col-4 d-flex align-items-center py-2 px-3 bg-light"
                        key={index}
                        onMouseEnter={() => viewDetailCategory(item.id)}
                      >
                        <img className="w-25" src={item.image} alt="img slide" />
                        <div>{item.name}</div>
                      </div>
                    )
                  }) 
                  :
                  <div className="d-flex align-items-center py-2 px-3 bg-light">
                    <img className="w-25" src="https://via.placeholder.com/100" alt="img slide" />
                    <div>Không có dữ liệu</div>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      }
    </React.Fragment>
  )
}
