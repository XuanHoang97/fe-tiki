import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../store/actions";
import { path } from '../../../utils';

export default function Category() {
  const [hoverMenu, setHoverMenu] = useState(false);

  const dispatch = useDispatch();
  const category = useSelector(state => state.admin.categories); 

  useEffect(() => {
    dispatch(actions.fetchAllCategory());
  }, [dispatch]);

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
        <div className="dropdown-menu list__product col-12 d-flex" style={{display: "block"}} 
          onMouseLeave={() => setHoverMenu(false)}
        >
          <div className="col-3 p-0 border-right">
            { category.map((item, index) => {
              let imgBase64 = "";
              if (item.image) {
                imgBase64=new Buffer(item.image, 'base64').toString('binary');
              }

              return (
                  <div className="dropdown-item drop__menu d-flex py-2 px-3 bg-light" key={index} >
                    {/* <img className="col-3"  src={imgBase64} alt="img slide" /> */}

                    <div className="col-1 mr-2" style={{backgroundImage: `url(${imgBase64})`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '50%'}} ></div>
                    <div style={{fontSize: '13px'}}>{item.name}</div>
                  </div>
              );
            })}
          </div>

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
        </div>
      }
    </>
  )
}
