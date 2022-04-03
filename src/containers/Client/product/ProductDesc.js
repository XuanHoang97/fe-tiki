import React, { useState } from 'react';
import Moment from 'react-moment';

// ReadMore, readLess
const ReadMore = ({ children }) => {
    const text = children;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="read-more">
            <div className="read-more-content">
                {isOpen ? children :
                    <span className="character__special" 
                        dangerouslySetInnerHTML={{ __html: text?.props?.dangerouslySetInnerHTML?.__html && 
                        text.props.dangerouslySetInnerHTML.__html.substr(0,300)}}>
                    </span>
                }
            </div>

            <div className="text-center ShowMore">
                <button onClick={toggle} type="button" className="btn btn-primary mt-3">
                    {isOpen ? 'Thu gọn' : 'Đọc thêm'}
                    <i className= {isOpen ? 'fas fa-caret-up ml-2' : 'fas fa-caret-down ml-2'}/>
                </button>
            </div>
        </div>
    );
};

const ProductDesc = (props) => {
    const {detailProduct} = props;

    return (
        <>
            <h6 className="headDesc">MÔ TẢ SẢN PHẨM</h6>
            <div className="desc">
                <div className="descProd col-md-8">
                    <ReadMore>
                        {
                            detailProduct?.Markdown?.descriptionHTML ?
                            <span className="character__special" dangerouslySetInnerHTML={{ __html: detailProduct.Markdown.descriptionHTML}}></span>
                            : <span dangerouslySetInnerHTML={{ __html: 'Đang cập nhật...'}}></span>
                        }
                    </ReadMore>
                </div>

                <div className="col-md-4">
                    <h5 className="mb-4">Tin tức và sự kiện</h5>
                    <div className="list_news row pl-3">
                        {
                        detailProduct?.newData >0 ?  
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
                        :
                        <div className="text-center">
                            <span className="text-danger">Đang cập nhật...</span>
                        </div>
                        }           
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductDesc;