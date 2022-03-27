import { numberFormat } from 'components/Formatting/FormatNumber';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Slider from "react-slick";
import React from 'react';
import './Style.scss';

const ProductSimilar = ({similarProducts}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1
  };

    return (
        <div>
            <h6 className="similar">SẢN PHẨM TƯƠNG TỰ</h6>
            <Slider {...settings} className="bg-white" >
            {
              similarProducts?.length > 0 ?
              similarProducts.map((item, index) => {
                return (
                  <div className="prod-similar" key={index}>
                    <img src={item.image} className="w-50" alt="" />
                    <h6 className="mt-1 mb-3 text-primary">{item.name}</h6>
                    <div className="price__prod">
                        <span className="price-similar">
                            {numberFormat(item.price)}
                        </span>
                        <span className="badge badge-pill badge-warning p-1 ml-3 mr-2">-1%</span>
                    </div>
                  </div>
                  );
                })
                :
                <div className="prod-similar">
                  <h6 className="mt-1 mb-3 text-center text-danger">Không có sản phẩm nào tương tự...</h6>
                </div>
            }
            </Slider>
        </div>
    );
}
export default ProductSimilar;