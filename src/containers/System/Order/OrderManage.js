import React, { Component } from 'react';
import { connect } from 'react-redux';
class OrderManage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="mx-2">
                <div className="h5 text-dark mb-4">Quản lý đơn đặt hàng</div>

                <div className="form-group col-3 p-0">
                  <label htmlFor="">Chọn ngày</label>
                  <input type="date"
                    className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                </div>


                <div className="text-dark">Danh sách đơn đặt hàng (150)</div>
                <table className="table table-striped table-bordered table-hover">
                    <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                        <tr>
                            <th scope="col">Tick</th>
                            <th scope="col">STT</th>
                            <th scope="col">Ảnh</th>
                            <th scope="col">Tên sản phẩm</th>
                            <th scope="col">Người đặt</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Email</th>
                            <th scope="col">SĐT</th>
                            <th scope="col">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="form-group">
                                    <input type="checkbox" className="w-100" />
                                </div>
                            </td>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                                <button type="button" className="btn text-primary mr-2">
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button type="button" className="btn text-danger">
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderManage);
