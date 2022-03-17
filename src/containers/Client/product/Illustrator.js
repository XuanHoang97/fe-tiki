import React, { useState } from 'react';
import './Style.scss';

const Illustrator = ({detailProduct}) => {
    const [imgProduct, setImgProduct] = useState('');
    const [active, setActive] = useState('');
    const [styleActive, setStyleActive] = useState('');

    const changeImage = (img) => {
        setImgProduct(img.images);
        setActive(img.id);
        setStyleActive('activeImg');
    }

    return (
        <div className="descProduct col-md-3">
            {
                imgProduct ?
                <img className="w-75" src={imgProduct} alt="loading" />
                :
                <img className="w-75" src={detailProduct?.image ? detailProduct.image :'loading...'} alt="loading" />
            }
            <hr/>
            <div className="imgDesc">
                {
                    detailProduct?.picturesData ?
                    detailProduct.picturesData.map((item, index) => {
                        return (
                            <div className={`col-3 p-1 ${active === item.id ? styleActive :'' }`} 
                                key={index} onClick = {()=>changeImage(item)}>
                                <img className="w-75" src={item.images} alt="loading" />
                            </div>
                        )
                    })
                    : <span className='text-danger'>Loading image description...</span>
                }
            </div>
        </div> 
    );
}
export default Illustrator;