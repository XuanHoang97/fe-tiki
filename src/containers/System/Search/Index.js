import React from 'react';
import { Link } from 'react-router-dom';

function Index(props) {
    const { dataSearch} = props;
    return (
        <div>
            <div className='p-3'>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <span>Kết quả tìm kiếm: </span>
                        <span className="text-primary ml-2">{dataSearch.length} kết quả</span>
                    </div>
                </div>

                {
                    dataSearch.map((item, index) => {
                     //endCode image
                     let imageBase64='';
                    if(item.image){
                        imageBase64=new Buffer(item.image, 'base64').toString('binary')
                    }

                    return (
                        <div className= "d-flex bg-light border border-secondary p-2 my-3 align-items-center justify-content-between" >
                            <div className="d-flex"> 
                            <span>#{index + 1}</span>
                            <div style={{backgroundImage: `url(${imageBase64})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height: '45px',
                                            width: '45px', borderRadius: '50%', display: 'flex', margin: '0 auto'}}
                                className='border border-secondary'
                            >
                            </div>
                            <span className='text-success font-weight-bold ml-2'>{item.firstName} {item.lastName}</span>         
                            </div>


                            <button className="btn-sm btn btn-primary px-3">
                                <Link to='' className="text-white"> Xem chi tiết </Link>
                            </button>
                        </div>
                        );
                    })
                }
            </div>    
        </div>
    );
}

export default Index;