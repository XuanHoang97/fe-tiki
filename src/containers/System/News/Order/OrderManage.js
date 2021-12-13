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
                        <th scope="col">STT</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Ảnh sản phẩm</th>
                        <th scope="col">Xuất xứ</th>
                        <th scope="col">Tác vụ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                                <button type="button" className="btn text-primary px-2 mr-2">
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button type="button" className="btn text-danger px-2">
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Otto</td>
                            <td>
                                <button type="button" className="btn text-primary px-2 mr-2">
                                    <i className="fas fa-edit"></i>
                                </button>
                                <button type="button" className="btn text-danger px-2">
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
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
