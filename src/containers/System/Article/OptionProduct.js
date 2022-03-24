import React from 'react';

function OptionProduct(props) {
    const {option, handleOptionProduct, handleSaveChoose, 
        category, categoryId, changeCategory,
        productId, setProductId, DetailCategory} = props;
  
    return (
        <form className='bg-white p-3'
            onSubmit={handleSaveChoose}
            encType="multipart/form-data"
        >
            <div className='d-flex p-0'>
                <div className='d-flex col-md-4 p-0'>
                    <div className='col-6 p-0 mr-3'>
                        <label className='mr-3'>Danh mục</label>

                        <div className="form-group d-flex p-0">
                            <select className="form-control" style={{height:'30px'}}
                                value={categoryId}
                                onChange={(e)=>changeCategory(e)}
                            >     
                                {
                                    category?.length > 0 ?
                                    category.map((item, index) => {
                                        return (
                                            <option key={index} value={index +3 }>{item.name}</option>
                                        )
                                    }) :
                                    <option value="">Không có danh mục</option>
                                }                
                            </select>
                        </div>
                    </div>
                    
                    {
                        category?.length > 0 ?
                        <div className='col-md-6 p-0'>
                            <label className='mr-3'>Sản phẩm</label>
                            <div className="form-group d-flex p-0">
                                <select className="form-control"
                                    value={productId}
                                    onChange={(e)=>setProductId(e.target.value)}
                                >
                                    {
                                        DetailCategory?.length > 0 ?
                                        DetailCategory.map((item, index) => {
                                            return (
                                                <option key={index} value={item.id}>{item.name}</option>
                                            )
                                        }) :
                                        <option value="">Không có sản phẩm</option>
                                    }                                     
                                </select>
                            </div>
                        </div> :
                        <span>Không có sản phẩm nào ! </span>
                    }
                </div>

                <div className='d-flex col-md-6 ml-3'>   
                    <div className='col-7 p-0 mr-3'>
                        <label className='px-2'>Mẫu mã</label>
                        <div className="d-flex">
                        {
                            option?.length >0 &&
                            option.map((item, index) => {
                                return(
                                    <button 
                                        onClick={()=>handleOptionProduct(item)}
                                        type="button" 
                                        key={index}
                                        className={item.isSelected === true ? "btn btn-primary px-2 mx-2 font-weight-normal" : "btn btn-secondary btn-sm px-2 mx-2 font-weight-normal"}>
                                        {item.valueVi}
                                    </button>
                                ) 
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            <button type ="submit" className="btn btn-success">Lưu thông tin</button>
        </form>
    );
}
export default OptionProduct;