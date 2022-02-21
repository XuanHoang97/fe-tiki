import React, { useState } from 'react';
import {TabContent, TabPane } from 'reactstrap';
import TabControl from './TabControl';
import WarehouseManage from './WarehouseManage';

const SupplierManage = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    
    //onChange image
    const changeImage = async(e) => {
        let data=e.target.files;
        let file=data[0];
        if(file){
            // let objectUrl=URL.createObjectURL(file)
            // setPreviewImg(objectUrl);
            // setImage(file);
        }
    }

    //remove image
    const removeImg=()=>{

    }

    //Add and Edit supplier
    const handleSaveSlide=(e)=>{
        e.preventDefault();
    }

    return (
        <div className="mx-2">
            <TabControl
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            
            <TabContent activeTab={activeTab} className='py-4 px-3 bg-light border'>
                <TabPane tabId="1">
                    <form className='list-slide'
                        onSubmit={handleSaveSlide}
                        encType="multipart/form-data"
                    >
                        <div className='d-flex justify-content-between col-12 p-0'>
                            <div className="form-group col-2 p-0">
                                <label htmlFor="">Họ tên</label>
                                <input type="text" className="form-control" 
                                    
                                />
                            </div>

                            <div className="form-group col-2">
                                <label htmlFor="">Sản phẩm cung cấp</label>
                                <input type="text" className="form-control" 
                                    
                                />
                            </div>

                            <div className="form-group col-2 p-0">
                                <label htmlFor="">Địa chỉ</label>
                                <input type="text" className="form-control" 
                                    
                                />
                            </div>

                            <div className="form-group col-2">
                                <label htmlFor="">Số điện thoại</label>
                                <input type="text" className="form-control" 
                                    
                                />
                            </div>

                            <div className="form-group col-2 p-0">
                                <label htmlFor="">Email</label>
                                <input type="text" className="form-control" 
                                    
                                />
                            </div>

                            <div className='upload-file d-flex col-2 pr-0'>
                                <div className="form-group col-6 p-0">
                                    <label>Avatar</label>
                                    <input id="previewImg" type="file" hidden 
                                        onChange={(e)=>changeImage(e)}
                                        name='image'
                                    />
                                    <label htmlFor="previewImg" className="btn btn-warning w-100"><i className="fas fa-upload"></i> Tải ảnh</label>  
                                </div>

                                <div className="preview-image col-6 border">
                                    <div 
                                        onClick={() =>removeImg()} 
                                        className="col-md-12" style={{textAlign: 'end', position: 'absolute', right: '-1.5rem', top: '-1rem'}}>
                                        <i className="far fa-times-circle text-danger"></i>
                                    </div> 
                                </div>
                            </div>

                        </div>

                        <button type='submit' className="btn btn-success px-2">Thêm mới</button>
                        <hr/>

                        <div className="text-dark">Danh sách nhà cung cấp (<b>0</b>)</div>
                        <table className="table table-striped table-bordered table-hover w-100">
                            <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                                <tr>
                                    <td>Tick</td>
                                    <td>STT</td>
                                    <td>Ảnh</td>
                                    <td>Tiêu đề</td>
                                    <td>Ngày đăng</td>
                                    <td>Thao tác</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><div className="form-group"><input type="checkbox" className="w-100" /></div></td>
                                    <td>1</td>                                               
                                    <td style={{width:'6%'}}><img src='' className='w-100' alt="" /> </td>
                                    <td>abc</td>
                                    <td>abc</td>
                                    <td className=''>
                                        <button type="button" className="btn text-primary  mr-3">
                                            <i className="fas fa-edit"></i>
                                        </button>

                                        <button type="button" className="btn text-danger">
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </TabPane>
                
                <WarehouseManage 
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </TabContent>
        </div>
    );
}
export default SupplierManage;
