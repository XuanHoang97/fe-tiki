import React  from "react";
import './style.scss';

const Search_special = () => {
    const iconShopping = 'https://salt.tikicdn.com/ts/upload/c7/ee/c2/d52a63b18732d5a77a9be29e7c3623a2.png';
    return(
        <>
            <div className="shoppingTrend">
                <h5 className="headerShopping">
                    <img src={iconShopping} alt="" />
                    <span className="ml-2">Xu Hướng Mua Sắm</span>
                </h5>

                <div className="view--more">
                    <i className="fas fa-sync-alt mr-2" />
                    <span className="small">XEM THÊM</span>
                </div>
            </div>

            <div className="searchTrend">
                <div className="card col-md-3 col-3 p-0">
                    <div className="card-body">
                        <div className="illustrator row m-1">
                            <img className="col-md-4 col-12 p-0" src="https://salt.tikicdn.com/cache/w100/ts/product/1b/58/65/16e873c283c090b3cb3e28ab3e660648.jpg.webp" alt="" />
                        </div>
                        <div className="info" style={{ background: 'https://salt.tikicdn.com/cache/w100/ts/product/1b/58/65/16e873c283c090b3cb3e28ab3e660648.jpg.webp' }}>
                            <h5 className="card-text">abcd</h5>
                            <span className="small text-secondary">15 sản phẩm</span>
                        </div>
                    </div>
                </div>
            </div>                                              
        </>
    );
}
export default Search_special;

