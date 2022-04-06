import { TabPane } from 'reactstrap';
import { CRUD_ACTIONS } from 'utils';
import React from 'react';
import './style.scss';

function SpecialCategory(props) {
    const { 
        category, categoryId, setCategoryId, action, saveCategory,categoryName, setCategoryName,
        changeImageCategory, categoryPreviewImg, specialCategories, editSpecialCategory
    } = props;

    return (
        <TabPane tabId="2">
            <form className='list-category-special'
                onSubmit={saveCategory}
                encType="multipart/form-data"
            >
                <div className='formCategory'>
                    <div className="form-group col-md-4 p-0">
                        <label htmlFor="">Tiêu đề</label>
                        <input type="text" className="form-control" 
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </div>

                    <div className="form-group col-md-2">
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

                    <div className='upload-file d-flex col-md-4'>
                        <div className="form-group col-4 p-0">
                            <label>Ảnh</label>
                            <input id="previewImgCategory" type="file" hidden 
                                onChange={(e)=>changeImageCategory(e)}
                            />

                            <label htmlFor="previewImgCategory" className="btn btn-warning w-100"><i className="fas fa-upload"></i> Tải ảnh</label>  
                        </div>

                        <div className="preview-image col-md-8 border" 
                            style={{backgroundImage: `url(${categoryPreviewImg})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}
                        >
                            {
                                categoryPreviewImg ?
                                <div 
                                    className="col-md-12" style={{textAlign: 'end', position: 'absolute', right: '-1.5rem', top: '-1rem'}}>
                                    <i className="far fa-times-circle text-danger"></i>
                                </div> 
                                : <img src="https://giaoducthuydien.vn/wp-content/themes/consultix/images/no-image-found-360x250.png" className="w-50" alt="..." />
                            }
                        </div>
                    </div>
                    <button type='submit' className={action === CRUD_ACTIONS.EDIT ? "btn btn-warning" : "btn btn-success" }>
                        { action === CRUD_ACTIONS.EDIT ? 'Cập nhật' : "Thêm mới" } 
                    </button>
                </div>
                <hr/>

                <div className="text-dark">Danh sách (<b>{specialCategories.length}</b>)</div>
                <table className="table table-striped table-bordered table-hover">
                    <thead className="text-white">
                        <tr>
                            <td>STT</td>
                            <td>Ảnh</td>
                            <td>Tên</td>
                            <td>Thao tác</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            specialCategories?.length> 0 ?
                            specialCategories.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td style={{width:'5%'}}><img src={item.image} className="w-100" alt="" /> </td>
                                        <td className='text-primary'>{item.name}</td>
                                        <td className='d-flex'>
                                            <button onClick={()=> editSpecialCategory(item)} type="button" className="btn text-primary  mr-3">
                                                <i className="fas fa-pencil-alt"></i>
                                            </button>

                                            <button type="button" className="btn text-danger">
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
export default SpecialCategory;