import React from 'react';
import {TabPane } from 'reactstrap';
import { CRUD_ACTIONS } from 'utils';

function Slide(props) {
    const { 
        handleSaveSlide, name, setName, categoryId, setCategoryId,
        category, status, setStatus, statusSlide, changeImage,
        previewImg, removeImg, action, slide, editSlide, deleteSlide
    } = props;

    return (
        <TabPane tabId="1">
            <form className='list-slide'
                onSubmit={handleSaveSlide}
                encType="multipart/form-data"
            >
                <div className='formSlide d-flex justify-content-between col-md-12 p-0'>
                    <div className="form-group col-md-3 p-0">
                        <label htmlFor="">Tiêu đề</label>
                        <input type="text" className="form-control" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group col-md-2 p-0">
                        <label>Danh mục</label>
                        <select className="form-control"
                            value={categoryId}
                            onChange={(e) => setCategoryId(e.target.value)}
                        >
                            {
                                category.map((item, index) => {
                                    return <option key={index} value={item.id}>{item.name}</option>
                                })
                            }            
                        </select>
                    </div>

                    <div className="form-group col-md-2 p-0">
                        <label htmlFor="">Trạng thái</label>
                        <select className="form-control"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            {
                                statusSlide && statusSlide.length > 0 && 
                                statusSlide.map((item, index) => {
                                    return(
                                        <option key={index} value={item.valueVi}>{item.valueVi}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className='upload-file d-flex col-md-3 p-0'>
                        <div className="form-group col-5 p-0">
                            <label>Ảnh</label>
                            <input id="previewImg" type="file" hidden 
                                onChange={(e)=>changeImage(e)}
                                name='image'
                            />

                            <label htmlFor="previewImg" className="btn btn-warning w-100"><i className="fas fa-upload"></i> Tải ảnh</label>  
                        </div>

                        <div className="preview-image col-7 border" 
                            style={{backgroundImage: `url(${previewImg})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}
                        >
                            {
                            previewImg ?
                            <div 
                                onClick={() =>removeImg()} 
                                className="col-md-12" style={{textAlign: 'end', position: 'absolute', right: '-1.5rem', top: '-1rem'}}>
                                <i className="far fa-times-circle text-danger"></i>
                            </div> 
                            : <img src="https://giaoducthuydien.vn/wp-content/themes/consultix/images/no-image-found-360x250.png" className="w-50" alt="..." />
                            }
                        </div>
                    </div>

                </div>

                <button type='submit' className={action === CRUD_ACTIONS.EDIT ? "btn btn-warning" : "btn btn-success" }>
                    { action === CRUD_ACTIONS.EDIT ? 'Cập nhật' : "Thêm mới" } 
                </button>
                <hr/>

                <div className="text-dark">Danh sách (<b>{slide.length}</b>)</div>
                <table className="table table-striped table-bordered table-hover">
                    <thead className="text-white">
                        <tr>
                            <td>STT</td>
                            <td>Ảnh</td>
                            <td>Tiêu đề</td>
                            <td>Thao tác</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            slide && slide.length> 0 ?
                            slide.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>                                               
                                        <td style={{width:'6%'}}><img src={item.image} className='w-100' alt="" /> </td>
                                        <td>{item.name}</td>
                                        <td className=''>
                                            <button onClick={() => editSlide(item)} type="button" className="btn text-primary mr-3">
                                                <i className="fas fa-edit"></i>
                                            </button>

                                            <button onClick={() => deleteSlide(item)} type="button" className="btn text-danger">
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            <tr>
                                <td colSpan={6}>
                                    <div className="text-center">
                                        <h4>Không có dữ liệu</h4>
                                    </div>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </form>
        </TabPane>
    );
}
export default Slide;