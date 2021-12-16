import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';

const ArticleManage = (props) => {

    return (
        <div className="mx-2">
            <div className="h5 text-dark mb-4">Quản lý bài viết</div>

            <div className='d-flex col-9 p-0'>
                <label className='mr-3'>Chọn sản phẩm</label>
                <div className="form-group d-flex col-3 p-0">
                    <select className="form-control" style={{height:'30px'}}>
                        <option>Danh mục sản phẩm</option>
                        <option>Mới nhất</option>
                        <option>Cũ nhất</option>
                    </select>
                </div>

                <div className="form-group d-flex col-3 p-0">
                    <select className="form-control" style={{height:'30px'}}>
                        <option>Sản phẩm</option>
                        <option>Công nghệ</option>
                        <option>àng tiêu dùng</option>
                    </select>
                </div>
            </div>

            <div className='d-flex col-12 my-4 p-0'>
                <div className="input-group col-4 p-0">
                    <div className="form-group col-12">
                      <label>Thêm mô tả sản phẩm</label>
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                </div>

                <div className="input-group col-4 p-0">
                    <div className="form-group col-12">
                      <label>Thêm mô tả sản phẩm</label>
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                </div>

                <div className="input-group col-4 p-0">
                    <div className="form-group col-12">
                      <label>Thêm mô tả sản phẩm</label>
                      <input type="text" className="form-control" placeholder="" />
                    </div>
                </div>
            </div>
           
        </div>
    );

}

const mapStateToProps = state => {
    return {
        // listNews: state.admin.news
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchNews: () => dispatch(actions.fetchAllNews())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleManage);
