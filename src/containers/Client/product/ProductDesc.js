import React from 'react';
import Moment from 'react-moment';

const ProductDesc = ({detailProduct}) => {
    return (
        <>
            <h6 className="mt-4 mb-2 m-0 px-2">MÔ TẢ SẢN PHẨM</h6>
            <div className="description row bg-white p-3 m-1">
                <div className="description--product col-md-8 p-0 pr-2 border-right">
                    {
                        detailProduct && detailProduct.Markdown && detailProduct.Markdown.descriptionHTML ?
                        <span className="character__special" dangerouslySetInnerHTML={{ __html: detailProduct.Markdown.descriptionHTML}}></span>
                        : 'loading...'
                    }
                    
                    <div className="text-center ShowMore">
                        <button type="button" className="btn btn-primary mt-3">Đọc thêm <i className="fas fa-caret-down ml-2" /></button>
                    </div>
                </div>

                <div className="col-md-4">
                    <h5 className="mb-4">Tin tức và sự kiện</h5>
                    <div className="list_news row pl-3">
                        {
                        detailProduct && detailProduct.newData ?  
                        detailProduct.newData.map((item, index) => {
                            return (
                            <div className="mb-2 d-flex p-0" key={index}>
                                <img className="w-25 mr-2" src={item.image} alt="loading" />
                                <div className="col-md-8">
                                    <span className="p-0 text-primary">{item.name}</span>
                                    <div className="d-flex align-items-center">
                                    <i className="text-secondary">                                 
                                        <span className ={item.status ==='Mới' ? "text-success" : "text-danger"}>{item.status}</span><Moment fromNow className ="small">{item.date}</Moment>
                                    </i>  

                                    <small className="text-secondary ml-2">by <b>{item.author_id}</b></small>     
                                    </div>
                                </div>
                            </div>
                            )
                        })
                        : 'loading...'
                        }           
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductDesc;