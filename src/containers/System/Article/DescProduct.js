import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {UploadMultiFile} from '../../../store/actions/productActions'

const DescProduct = (props) => {
    const {categoryId, setProductId, DetailCategory, category, changeCategory, productId} = props;

    const [pictures, setPictures] = useState([]);
    const [previewImg, setPreviewImg] = useState('');
    const dispatch = useDispatch();

    //onChange multi image
    const changeMultiImage = async(e) => {
        let file=e.target.files;
        if(file){
            setPictures(file);
        }
        const selectedFiles =[];
        const targetFilesObject= [...file]
        targetFilesObject.map((file)=>{
            return selectedFiles.push(URL.createObjectURL(file))
        })
        setPreviewImg(selectedFiles);
    }

    // upload multi file
    const uploadImgDesc = async(e) => {
        e.preventDefault();
        const dataImage = new FormData();
        dataImage.append('categoryId', categoryId);
        dataImage.append('productId', productId);
        if(pictures && pictures.length > 0){
            for(let i = 0; i < pictures.length; i++){
                dataImage.append('pictures', pictures[i]);
            }
        }
        dispatch(UploadMultiFile(dataImage));
    }

    return (
        <div className='bg-white p-2'>
            <form onSubmit={uploadImgDesc}
                encType="multipart/form-data"
            >
                <div className='d-flex col-12 p-0'>
                    <div className='col-md-3 p-0'>
                        <label className='mr-3'>Danh mục</label>
                        <div className="form-group d-flex p-0">
                            <select className="form-control" style={{height:'30px'}}
                                value={categoryId}
                                onChange={(e)=>changeCategory(e)}
                            >     
                                {
                                    category && category.length > 0 &&
                                    category.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )
                                    }) 
                                }                
                            </select>
                        </div>
                    </div>

                    {
                        category && category.length > 0 ?
                        <div className='col-md-3 p-0'>
                            <label className='mr-3'>Sản phẩm</label>
                            <select className="form-control" style={{height:'30px'}}
                                value={productId}
                                onChange={(e)=>setProductId(e.target.value)}
                            >
                                {
                                    DetailCategory && DetailCategory.length > 0 &&
                                    DetailCategory.map((item, index) => {
                                        return (
                                            <option key={index} value={item.id}>{item.name}</option>
                                        )
                                    }) 
                                }                                     
                            </select>
                        </div> :
                        <span>Không có sản phẩm nào ! </span>
                    } 

                    <div className='col-md-6 p-0'>
                        <div>Ảnh mô tả</div>
                        <input id="previewImg" type="file" hidden
                            name='pictures' 
                            multiple
                            onChange={(e) => changeMultiImage(e)} 
                        />

                        <div className='uploadFile d-flex'>
                            <label htmlFor="previewImg" className="btn btn-success mt-2"><i className="fas fa-upload"></i> Tải ảnh</label>      
                            <div className='col-9 border d-flex'>
                                {
                                    previewImg ?
                                    previewImg.map((url, index)=>{
                                        return (
                                            <div className="col-3" key={index}>
                                                <img src={url} alt=""  />
                                            </div>
                                        )
                                    })
                                    :
                                    // imgDefault
                                    <div className="col-12">
                                        <img src="https://via.placeholder.com/150" className="w-25" alt=""  />
                                    </div>
                                }
                            </div>
                        </div>
                    </div> 
                </div>

                <button type="submit" className="btn btn-primary">Lưu thông tin</button>
            </form>
        </div>
    );
}
export default DescProduct;