import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { path } from '../../../utils';
import * as actions from "../../../store/actions";

export default function Category() {
  const [active, setActive] = useState('');
  const [hoverMenu, setHoverMenu] = useState(false);
  const [detailMenu, setDetailMenu] = useState(false);
  const [hoverSubMenu, setHoverSubMenu] = useState(false);

  const dispatch = useDispatch();
  const category = useSelector(state => state.admin.categories); 
  const DetailCategory = useSelector(state => state.admin.detailCategory);

  useEffect(() => {
    dispatch(actions.fetchAllCategory());
  }, [dispatch]);

  const viewCategory = () => {
    setHoverMenu(!hoverMenu);
  };
  
  const viewDetailMenu = (id) => {
    setDetailMenu(true);
    dispatch(actions.DetailCategory(id));
    setActive(id, 'activeCategory');
  };

  return (
    <React.Fragment>
      <li className="menu_ctg nav-item dropdown mr-2 active"
        onMouseEnter={() => viewCategory()}
      >
        <Link className="category nav-link dropdown-toggle" to={path.HOMEPAGE}>
          <i className="fas fa-bars mr-2" />
          <small>Danh mục</small>
          <br />
          <span>Sản phẩm</span>
        </Link>
      </li>

      {
        hoverMenu === true  &&
        <div className="dropdown-menu list__product col-12 d-flex"
          onMouseLeave={() => setHoverMenu(false)}
        >
          <div className="col-3 p-0 border-right">
            { category.map((item, index) => {
              return (
                  <div key={index}
                    className={item.id === active ? 'activeCategory' : 'categoryMenu'}
                    onMouseEnter={() => viewDetailMenu(item.id)}
                  >
                    <img className="col-1 px-0 mr-2 rounded-circle"  src={item.image} alt="img slide" />
                    <div>{item.name}</div>
                  </div>
              );
            })}
          </div>

          <div className="menu__item col-9 p-0">
            {
              detailMenu === true &&
              <div className="row p-0">
                {
                  DetailCategory && DetailCategory.length > 0 ?
                  DetailCategory.map((item, index) => {
                    return (
                      <div className="col-4 d-flex align-items-center py-2 px-3 bg-light"
                        key={index}
                        onMouseEnter={() => setHoverSubMenu(!hoverSubMenu)}
                      >
                        <img className="w-25" src={item.image} alt="img slide" />
                        <div>{item.name}</div>
                      </div>
                    )
                  }) 
                  :
                  <div>Không có dữ liệu</div>
                }
              </div>
            }
          </div>
        </div>
      }
    </React.Fragment>
  )
}
