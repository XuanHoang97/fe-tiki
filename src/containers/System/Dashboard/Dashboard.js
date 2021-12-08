import React, { Component } from 'react';
import { connect } from 'react-redux';
class Dashboard extends Component {

    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div className="mx-2 my-3">
                <h5 className="text-dark">Trang chủ</h5>
                
                <div className="d-flex text-white" style ={{gap: '0px'}}>
                    <div className="card my-4 col-3 p-1 ">
                        <img className="card-img-top" src="https://thumbs.dreamstime.com/z/shopping-offer-online-sales-mobile-ecommerce-flat-design-concept-blue-yellow-background-modern-product-buying-purchasing-140997695.jpg" alt="Card image" />
                        <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                            <div className="stat">
                                <h3 className="card-text font-weight-bold">150</h3>
                                <h6 className="card-title">CHUYÊN MỤC</h6>
                            </div>
                            <a href="#" className="btn btn-warning">See Profile</a>
                        </div>
                    </div>

                    <div className="card my-4 col-3 p-1">
                        <img className="card-img-top" src="https://thumbs.dreamstime.com/z/shopping-offer-online-sales-mobile-ecommerce-flat-design-concept-blue-yellow-background-modern-product-buying-purchasing-140997695.jpg" alt="Card image" />
                        <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                            <div className="stat">
                                <h3 className="card-text font-weight-bold">100</h3>
                                <h6 className="card-title">BÀI VIẾT</h6>
                            </div>
                            <a href="#" className="btn btn-warning">See Profile</a>
                        </div>
                    </div>

                    <div className="card my-4 col-3 p-1">
                        <img className="card-img-top" src="https://thumbs.dreamstime.com/z/shopping-offer-online-sales-mobile-ecommerce-flat-design-concept-blue-yellow-background-modern-product-buying-purchasing-140997695.jpg" alt="Card image" />
                        <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                            <div className="stat">
                                <h3 className="card-text font-weight-bold">150</h3>
                                <h6 className="card-title">THÀNH VIÊN</h6>
                            </div>
                            <a href="#" className="btn btn-warning">See Profile</a>
                        </div>
                    </div>

                    <div className="card my-4 col-3 p-1">
                        <img className="card-img-top" src="https://thumbs.dreamstime.com/z/shopping-offer-online-sales-mobile-ecommerce-flat-design-concept-blue-yellow-background-modern-product-buying-purchasing-140997695.jpg" alt="Card image" />
                        <div className="card-img-overlay d-flex justify-content-between" style ={{flexDirection: 'column'}} >
                            <div className="stat">
                                <h3 className="card-text font-weight-bold">150</h3>
                                <h6 className="card-title">ĐƠN HÀNG</h6>
                            </div>
                            <a href="#" className="btn btn-warning">See Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
