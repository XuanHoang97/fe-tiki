import React  from "react";

const Search_special = () => {
    return(
        <>
            <div>
                <div className="mt-3 bg-white m-0 pt-3 pb-1 row justify-content-between pl-3 pr-4 align-items-center">
                    <div className="">
                        <h5 className="text-left d-flex align-items-center">
                            <img src="https://salt.tikicdn.com/ts/upload/c7/ee/c2/d52a63b18732d5a77a9be29e7c3623a2.png" style={{width: '25px'}}  alt="" />
                            <span className="ml-2">Xu Hướng Mua Sắm</span>
                        </h5>
                    </div>

                    <div className="view--more text-primary">
                        <i className="fas fa-sync-alt mr-2" />
                        <span className="small">
                            XEM THÊM</span>
                    </div>
                </div>
            </div>

            <div className="search__hightLight mt-0 pl-3 pb-2 p-0 pr-1 bg-white">
                    
                <div className="card col-md-3 col-3 p-0">
                    <div className="card-body pl-0 pr-0 pt-2 pb-0">
                        <div className="illustrator row m-1">
                            <img className="col-md-4 col-12 p-0" src="https://salt.tikicdn.com/cache/w100/ts/product/1b/58/65/16e873c283c090b3cb3e28ab3e660648.jpg.webp" alt="" />
                        </div>
                        <div className="info mt-2 pt-2 pl-3 pb-2" style={{ background: 'https://salt.tikicdn.com/cache/w100/ts/product/1b/58/65/16e873c283c090b3cb3e28ab3e660648.jpg.webp' }}>
                            <h5 className="card-text small font-weight-bold mb-0 text-dark">abcd</h5>
                            <span className="small text-secondary">15 sản phẩm</span>
                        </div>
                    </div>
                </div>
                            
            </div>                                              
        </>
    );
}
export default Search_special;

