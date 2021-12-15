import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const Sort = (props) => {
    return (
        <div className='justify-content-end d-flex col-9 p-0'>
            <div className="input-group col-5 p-0">
                <label className="p-0">Tìm kiếm</label>
                <input type="text" className="form-control ml-2" placeholder="Search..." 
                    style={{height:'30px'}}
                />
            </div>

            <div className="form-group d-flex col-2 p-0">
                <select className="form-control" name="" id=""  style={{height:'30px'}}>
                    <option>Thời gian</option>
                    <option>Mới nhất</option>
                    <option>Cũ nhất</option>
                </select>
            </div>

            <div className="form-group d-flex col-2 p-0">
                <select className="form-control" name="" id=""  style={{height:'30px'}}>
                    <option>Danh mục</option>
                    <option>Công nghệ</option>
                    <option>Nóng</option>
                </select>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);