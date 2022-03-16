import React from 'react';
import './Style.scss';

const Illustrator = ({detailProduct}) => {
    return (
        <div className="descProduct col-md-3">
            <div>
                <img className="w-75" src={detailProduct && detailProduct.image ? detailProduct.image :'loading...'} alt="loading" />
                <div className="content-left" style={{backgroundImage: `url(${detailProduct && detailProduct.image ? detailProduct.image : ''})` }}></div>
            </div>
            <hr/>
            <div className="imgDesc">
                {
                    detailProduct && detailProduct.picturesData ?
                    detailProduct.picturesData.map((item, index) => {
                        return (
                            <div className="col-3 p-1" key={index}>
                                <img className="w-100" src={item.images} alt="loading" />
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