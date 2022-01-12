import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDetailProduct } from "services/userService";
import { numberFormat } from "components/Formatting/FormatNumber";
import './Style.scss'

import Order from "./Order";
import Specifications from "./Specifications";
import Illustrator from "./Illustrator";
import Mail from "containers/HomePage/Section/Mail";
import Header from "containers/HomePage/Header/Header";
import Footer from "containers/HomePage/Footer/Footer";
import * as actions from "store/actions";
import Rate from "containers/HomePage/Section/Rate";
import Moment from "react-moment";

const ProductDetail = ({ match }) => {
  const [detailProduct, setDetailProduct] = useState({});
  const dispatch = useDispatch();
  const similarProducts = useSelector(state => state.admin.productSimilar);

  useEffect(() => {
    getDetailProduct(match.params.id).then(res => {
      setDetailProduct(res.data.detailProduct);
    });

    dispatch(actions.GetProductSimilar(match.params.id));
  }, [])

  useEffect(() => {
    document.title = `${detailProduct.name}-giá rẻ nhất vịnh Bắc Bộ`;
  }, [detailProduct]);

  console.log('data detail:', detailProduct);  

  return (
    <>
      <Header/>
      <div className="main bg-light pb-3">
        <div className="container">
          <h6 className="my-3">HOME / 
          {detailProduct && detailProduct.categoryData && detailProduct.categoryData.name ? detailProduct.categoryData.name :'loading..'}</h6>
          
          <div className="bg-white pt-4 pb-4 p-3 m-0 text-center row">
            <div className="col-md-3 p-0 text-left">
              <div>
                <img className="w-75" src={detailProduct && detailProduct.image ? detailProduct.image :'loading...'} alt="loading" />

                <div className="content-left"
                    style={{backgroundImage: `url(${detailProduct && detailProduct.image ? detailProduct.image : ''})` }}
                >
                </div>
                <Illustrator />
              </div>
              <hr/>

              {/* character special */}
              <div className="mt-3 py-1 text-primary border-bottom">Đặc Điểm Nổi Bật</div>
              {
                detailProduct && detailProduct.Markdown && detailProduct.Markdown.characterHTML ?
                <div className="character__special" dangerouslySetInnerHTML={{ __html: detailProduct.Markdown.characterHTML}} ></div>
                : 'loadinng...'
              }
            </div>
            
            <div className="col-md-6 pl-4 pr-2 text-left">
              <div className="info d-flex align-items-center">
                <h4 className="mr-5 font-weight-bold">{detailProduct && detailProduct.name ? detailProduct.name :'loading...'}</h4>
                <Rate />
              </div>

              <div className="price bg-light p-2">
                <div className="row m-1 align-items-center">
                  <h5 className="text-danger font-weight-bold">{numberFormat(detailProduct && detailProduct.price ? detailProduct.price :'loading')}</h5>
                  <span className="badge badge-pill badge-warning ml-3 mr-4">
                    -1 %
                  </span>
                  <strike className="small">{numberFormat(detailProduct && detailProduct.sale ? detailProduct.sale :'loading...')}</strike>
                </div>
              </div>
              <Order />
            </div>
              
            {/* <Offer /> */}
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
          </div>

          <Specifications />
          <>
              <h6 className="mt-4 mb-2 m-0 px-2">MÔ TẢ SẢN PHẨM</h6>
              <div className="description row bg-white p-3 m-1">
                  <div className="description--product col-md-8 p-0 pr-2">
                      {
                        detailProduct && detailProduct.Markdown && detailProduct.Markdown.descriptionHTML ?
                        <span className="character__special" dangerouslySetInnerHTML={{ __html: detailProduct.Markdown.descriptionHTML}}></span>
                        : 'loading...'
                      }
                     
                      <div className="text-center ShowMore">
                          <button type="button" className="btn btn-primary px-3 mt-3">Đọc thêm <i className="fas fa-caret-down ml-2" /></button>
                      </div>
                  </div>

                  <div className="col-md-4">
                      <h5 className="mb-4">Tin tức và sự kiện</h5>
                      <div className="list_news row pl-3">
                        {
                          detailProduct && detailProduct.newData && detailProduct.newData ?  
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

          <div>
            <h6 className="mt-4 mb-2 m-0">SẢN PHẨM TƯƠNG TỰ</h6>
            <div className="row bg-white pt-4 pb-4 p-3 m-1">
              {
                similarProducts && similarProducts.length > 0 ?
                similarProducts.map((item, index) => {
                  let imgBase64 = '';
                  if (item.image) {
                    imgBase64=new Buffer(item.image, 'base64').toString('binary');
                  }

                  return (
                    <div className="col-md-2 col-6 text-center" key={index} style={{cursor: 'pointer'}}>
                      <img src={imgBase64} className="w-75" alt="" />
                      <h6 className="mt-1 mb-3 text-center text-primary">{item.name}</h6>

                      <Rate />
                      <div className="price__prod row align-items-center justify-content-center">
                          <span className="font-weight-bold" style={{ color: 'red', fontSize: '14px' }}>
                              {numberFormat(item.price)}
                          </span>

                          <span className="badge badge-pill badge-warning p-1 ml-3 mr-2">-1%</span>
                      </div>
                    </div>
                  );
                })
                :
                <div className="col-md-12">
                  <h6 className="mt-1 mb-3 text-center text-danger">Không có sản phẩm nào tương tự...</h6>
                </div>
              }
            </div>
          </div>
          <Mail />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ProductDetail;
