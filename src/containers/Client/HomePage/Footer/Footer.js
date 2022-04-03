import { DetailCategory, fetchAllCategory } from 'store/actions';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { path } from 'utils';
import './style.scss';

const Footer = () => {
    const dispatch = useDispatch();
    const [categoryMB, setCategoryMB] = useState(false);
    const [activeCategory, setActiveCategory] = useState('');

    const [activeItemCategory, setActiveItemCategory] = useState(3);
    const categories = useSelector(state => state.admin.categories);
    const Products = useSelector(state => state.admin.detailCategory);

    useEffect(() => {
        dispatch(fetchAllCategory());
        dispatch(DetailCategory(3));
    }, [dispatch]);
    
    // detail category
    const detailCategory = (category) => {
        setActiveItemCategory(category);
        dispatch(DetailCategory(category));
    }

    // hide-show category
    const viewCategory = () => {
        setCategoryMB(!categoryMB);
        setActiveCategory('activeCategoryMB');
    }
    const onCloseCategory = () => {
        setCategoryMB(false);
        setActiveCategory('');
    }

    return (
        <>
            <div className="footer"> @CopyRight Hoang97 </div>
            {
                categoryMB &&
                <div className="category-mobile">
                    <div className='catg-header'>
                        <span className="close-category" onClick={() => onCloseCategory()}>
                            <img src="https://salt.tikicdn.com/ts/brickv2og/43/53/da/fe977baecb94a25778372c7b6147c8e8.png" alt="" />
                        </span>

                        <span className="title-category">
                            <h5>Danh mục sản phẩm</h5>
                        </span>
                    </div>

                    <div className="category-content">
                        <div className="catg-left">
                            {
                                categories?.length > 0 ?
                                categories.map((item, index) => {
                                    return (
                                        <div key={index}
                                            className={`item-catg ${activeItemCategory === item.id ? 'active-item-catg' : ''}`}
                                            onClick={() => { detailCategory(item.id)}}
                                        >
                                            <img src={item.image} className="img-catg" alt="" />
                                            <span>{item.name}</span>
                                        </div>
                                    )
                                })
                                : 'Không có danh mục nào'
                            }
                        </div>

                        <div className="catg-right">
                            <div className="catg-right-header">
                                abcd
                            </div>

                            <div className="catg-right-content">
                                {
                                    Products?.length > 0 ?
                                    Products.map((item, index) => {
                                        return (
                                            <div className="list__prod mb-3" key={index}>
                                                <img src={item.image} className='w-75' alt="" />
                                                <p className="text-secondary mt-3 mb-1">{item.name}</p>
                                            </div>
                                        )})
                                    :
                                    <span className='text-success'> Đang cập nhật sản phẩm... </span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className="menuMB">   
                <NavLink to={`${path.HOMEPAGE}`} activeClassName='activeMenuMB' className='menu-item'>
                    <i className="fa fa-home fa-2x"></i>
                    <div>Trang chủ</div>
                </NavLink>

                <div className={`menu-item ${activeCategory}`} onClick={()=>viewCategory()}>
                    <i className="fa fa-list fa-2x"></i>
                    <div>Danh mục</div>
                </div>

                <NavLink to={`${path.DISCOUNT_DETAIL}`} activeClassName='activeMenuMB' className='menu-item'>
                    <i className="fa fa-tags fa-2x"></i>
                    <div>Voucher</div>
                </NavLink>

                <NavLink to={`${path.ACCOUNT}`} activeClassName='activeMenuMB' className='menu-item'>
                    <i className="fa fa-user fa-2x"></i>
                    <div>Cá nhân</div>
                </NavLink>
            </div>
        </>
    );
}
export default Footer;