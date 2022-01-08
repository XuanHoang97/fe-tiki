import React, { } from 'react';
import './style.scss'

const Footer = () => {
    return (
        <div className="footer bg-white container pt-4 pb-3">
            <div className="row ">
            <div className="col-md-3 footer--content ">
                <p style={{color: 'rgb(51, 51, 51)', fontSize: '13px', fontWeight: 500}} className="mb-3">HỖ TRỢ KHÁCH HÀNG</p>
                <small className="text-danger font-weight-bold">Hotline chăm sóc khách hàng: 1900-6035</small>
                <small>(1000đ/phút , 8-21h kể cả T7, CN)</small><br />
                <a href=" ">Các câu hỏi thường gặp</a><br />
                <a href=" ">Hướng dẫn đặt hàng</a><br />
                <a href=" ">Phương thức vận chuyển</a><br />
                <a href=" ">chính sách đổi trả</a><br />
                <a href=" ">Hướng dẫn trả góp</a><br />
                <a href=" ">Báo lỗi bảo mật: xuanhoang997@gmail.com</a><br />
            </div>
            <div className="col-md-2 footer--content ">
                <p style={{color: 'rgb(51, 51, 51)', fontSize: '13px', fontWeight: 500}}>VỀ TIKI</p>
                <a href=" ">Giới thiệu về Tiki</a><br />
                <a href=" ">Tuyển dụng</a><br />
                <a href=" ">chính sách bảo mật thanh toán</a><br />
                <a href=" ">Điều khoản sử dụng</a><br />
                <a href=" ">Giưới thiệu Tiki xu</a><br />
                <a href=" ">Bản hành doanh nghiệp</a><br />
            </div>
            <div className="col-md-2 footer--content ">
                <p style={{color: 'rgb(51, 51, 51)', fontSize: '13px', fontWeight: 500}}>HỢP TÁC VÀ LIÊN KẾT</p>
                <a href=" ">Quy chế hoạt động sàn GDTMĐT</a><br />
                <a href=" ">Bán hàng cùng Tiki</a><br />
            </div>
            <div className="col-md-3 ">
                <p style={{color: 'rgb(51, 51, 51)', fontSize: '13px', fontWeight: 500}}>PHƯƠNG THỨC THANH TOÁN</p>
                <div className="payment row ">
                <div className="col-md-3 col-3 mb-2 ">
                    <img src="https://business.momo.vn/assets/landingpage/img/931b119cf710fb54746d5be0e258ac89-logo-momo.png" className='w-75' alt=" " />
                </div>
                <div className="col-md-3  col-3">
                    <img src="https://cdn.tgdd.vn/2020/04/GameApp/image-180x180.png" className='w-75' alt=" " />
                </div>
                <div className="col-md-3  col-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt=" " />
                </div>
                
                <div className="col-md-3 col-3">
                </div>
                
                <div className="col-md-3  col-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png" alt=" " />
                </div>
                <div className="col-md-3  col-3">
                    <img src="https://png.pngtree.com/png-vector/20191028/ourlarge/pngtree-atm-card-icon-for-your-project-png-image_1904816.jpg" alt=" " />
                </div>
                <div className="col-md-3  col-3">
                    <img src="https://image.shutterstock.com/image-vector/dollar-icon-symbol-vector-money-260nw-1723606144.jpg" alt=" " />
                </div>
                </div>
            </div>
            <div className="col-md-2 ">
                <p style={{color: 'rgb(51, 51, 51)', fontSize: '13px', fontWeight: 500}}>KẾT NỐI VỚI CHÚNG TÔI</p>
                <div className="connect row ">
                <div className="col-md-3 col-2 ">
                    <a href=" ">
                    <img src="https://thuviendohoa.vn/2020/upload/images/items/vector-icon-logo-facebook-4373.jpg?t=20170704_095556" alt=" " />
                    </a>
                </div>
                <div className="col-md-3 col-2">
                    <a href=" ">
                    <img src="https://cliply.co/wp-content/uploads/2019/04/371903520_SOCIAL_ICONS_YOUTUBE.png" alt=" " />
                    </a>
                </div>
                <div className="col-md-3 col-2">
                    <a href=" ">
                    <img src="https://chanhtuoi.vn1.vdrive.vn/uploads/2020/10/logo-zalo.jpg " className="w-100 " alt=" " />
                    </a>
                </div>
                </div>
                <p style={{color: 'rgb(51, 51, 51)', fontSize: '13px', fontWeight: 500}} className="mt-3 ">TẢI ỨNG DỤNG</p>
                <div className="app ">
                <a href=" ">
                    <img className="w-75 col-md-10 col-4 mb-2 " src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/appstore.png " alt=" " /> <br/>
                    <img className="w-75 col-md-10 col-4 " src="https://frontend.tikicdn.com/_desktop-next/static/img/icons/playstore.png " alt=" " />
                </a>
                </div>
            </div>
            </div>
            <div className="row mt-5 ">
            <div className="author col-md-8 ">
                <h6 className="font-weight-bold small">© 2021 - <span className="text-success">Website Is Created By LeHoang97, DacLV97.</span> </h6>
                <p className="text-danger">Start project: 21.06.2021</p>
                <small>Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 06/01/2010</small>
            </div>
            <div className="authent col-md-4 pr-0 row align-items-center justify-content-end ">
                <div className="col-md-2 col-2 ">
                <a href=" ">
                    <img className="w-100" src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png " alt=" " />
                </a>
                </div>
                <div className="col-md-4 col-4 ">
                <a href=" ">
                    <img className="w-100 " src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg " alt=" " />
                </a>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;