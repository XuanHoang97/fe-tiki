import { numberFormat } from 'components/Formatting/FormatNumber';
import Rate from 'containers/HomePage/Section/Rate';
import React from 'react';

const ProductSimilar = ({similarProducts}) => {
    return (
        <div>
            <h6 className="mt-4 mb-2 m-0">SẢN PHẨM TƯƠNG TỰ</h6>
            <div className="row bg-white pt-4 pb-4 p-3 m-1">
              {
                similarProducts && similarProducts.length > 0 ?
                similarProducts.map((item, index) => {
                  return (
                    <div className="col-md-2 col-6 text-center" key={index} style={{cursor: 'pointer'}}>
                      <img src={item.image} className="w-75" alt="" />
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
    );
}

export default ProductSimilar;