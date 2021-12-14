import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Sort = (props) => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        props.fetchCategories();
        setCategory(props.listCategory);
    }, [category]);

    return (
        <div className='justify-content-end d-flex col-9 p-0'>
            <div className="input-group col-5 p-0">
                <label className="p-0">Tìm kiếm</label>
                <input type="text" className="form-control ml-2" placeholder="Search..." 
                    style={{height:'30px'}}
                />
            </div>

            <div className="form-group d-flex col-3 p-0">
                <select className="form-control" name="" id=""  style={{height:'30px'}}>
                    {   
                        props.listCategory && props.listCategory.length >0 ?
                        props.listCategory.map((item, index) => {
                            return (
                                <option className='' key={index} value={item.name}>{item.name}</option>
                            )
                        })
                        : null
                    }
                </select>
            </div>

            <div className="form-group d-flex col-2 p-0">
                <select className="form-control" name="" id=""  style={{height:'30px'}}>
                    <option>Giá cả</option>
                    <option>Từ cao xuống thấp</option>
                    <option>Từ thấp lên cao</option>
                </select>
            </div>

            <div className="form-group d-flex col-2 p-0">
                <select className="form-control" name="" id=""  style={{height:'30px'}}>
                    <option>Trạng thái</option>
                    <option>Còn hàng</option>
                    <option>Hết hàng</option>
                </select>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        listCategory: state.admin.categories
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(actions.fetchAllCategory())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);