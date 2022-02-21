import React from 'react';

const Accessories = ({detailProduct}) => {
    return (
        <div className="col-md-3">
            <div className="row justify-content-center mb-1">
                <button type="button" className="btn btn-default mr-2">
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-like.svg" alt="" />
                </button>
                <button type="button" className="btn btn-default ">
                    <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-account-social.svg" alt="" />
                </button>
            </div>

            <div className="card bg-light">
                <div className="card-header font-weight-bold p-1">Phụ kiện đi kèm</div>
                <div className="card-body m-1 pl-3 pr-3 p-0">
                    <div>
                        <div className=" row p-2 p-0 justify-content-between">
                        {
                            detailProduct && detailProduct.Markdown && detailProduct.Markdown.accessoryHTML ?
                            <span className="character__special" dangerouslySetInnerHTML={{ __html: detailProduct.Markdown.accessoryHTML}}></span>
                            : 'loading...'
                        }
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    );
}
export default Accessories;