import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../store/actions";

export default function Category() {
  const dispatch = useDispatch();
  const category = useSelector(state => state.admin.categories); 

  useEffect(() => {
    dispatch(actions.fetchAllCategory());
  }, [dispatch]);

  return (
    <li className="menu_ctg nav-item dropdown mr-2 active">
      <a className="category nav-link dropdown-toggle" href="/" id="dropdownId" data-toggle="dropdown" data-hover="dropdown" aria-expanded="false"
        style={{ padding: '10px 15px' }}>
        <i className="fas fa-bars mr-2" />
        <small>Danh mục</small>
        <br />
        <span style={{ fontSize: '15px' }}>Sản phẩm</span>
      </a>

      {
        <div className="dropdown-menu list__product" aria-labelledby="dropdown" style={{ top: "3.5rem", display: "block", left: "-3.5em" }}>
          { category.map((item, index) => {
              return (
                <div className="dropdown-item drop__menu" key={index} >
                  <div> {item.name}  </div>
                </div>
              );
          })}

          <div className="menu__item">
            abcd
          </div>
        </div>
      }
    </li>
  )
}
