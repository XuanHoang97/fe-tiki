import React from 'react';

const Illustrator = ({detailProduct}) => {
    return (
        <div className="col-md-3 p-0 text-left">
            <div>
                <img className="w-75" src={detailProduct && detailProduct.image ? detailProduct.image :'loading...'} alt="loading" />
                <div className="content-left" style={{backgroundImage: `url(${detailProduct && detailProduct.image ? detailProduct.image : ''})` }}></div>
            
                <div className="row mt-2 m-0">
                    <div className="col-3 border border-light p-1">
                        <img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20Detail%20Image%2Fss-galaxy-zFold-detail02.png?alt=media&token=c931c715-0279-481f-a921-d8a0b07b7606" alt="" />
                    </div>
                            
                    <div className="col-3 border border-light p-1">
                        <img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20Detail%20Image%2Fss-galaxy-zFold-detail03.png?alt=media&token=267b8976-db73-48f5-be47-f9b4a17d1c8e" alt="" />
                    </div>
                    <div className="col-3 border border-light p-1">
                        <img className="w-100" src="https://firebasestorage.googleapis.com/v0/b/techshop-website.appspot.com/o/images%2FProduct%20Detail%20Image%2Fss-galaxy-zFold-detail02.png?alt=media&token=c931c715-0279-481f-a921-d8a0b07b7606" alt="" />
                    </div>
                </div>
            </div>
            <hr/>

            <div className="mt-3 py-1 text-primary">Đặc Điểm Nổi Bật</div>
            {
            detailProduct && detailProduct.Markdown && detailProduct.Markdown.characterHTML ?
            <div className="character__special" dangerouslySetInnerHTML={{ __html: detailProduct.Markdown.characterHTML}} ></div>
            : 'loadinng...'
            }
        </div> 
    );
}
export default Illustrator;