import React from 'react';
import './style.scss'

function Filter(props) {
    return (
        <div className="sort col-3 py-2 border-right">
            <div className="addr border-bottom py-3">
                <div>ĐỊA CHỈ NHẬN HÀNG</div>
                <div className='font-weight-bold'>P. Yên NGhĩa, Q. Hà Đông, Hà Nội</div>
                <div className="text-primary"> Đổi địa chỉ</div>
            </div>

            <div className="service border-bottom py-3">
                <h6>DỊCH VỤ</h6>
                <div className="item__service">
                    <input type="checkbox" name="" id="" />
                    <img src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png" className='w-25' alt="" />
                    <span>Giao siêu tốc 2H</span>
                </div>

                <div className="item__service">
                    <input type="checkbox" name="" id="" />
                    <img src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png" className='w-25' alt="" />
                    <span>Không giới hạn</span>
                </div>

                <div className="item__service">
                    <input type="checkbox" name="" id="" />
                    <span>Rẻ hơn hoàn tiền</span>
                </div>
            </div>

            <div className="branding py-3">
                <h6>THƯƠNG HIỆU</h6>
                <div className="item__branding">
                    <input type="checkbox" name="" id="" />
                    <span>Giao siêu tốc 2H</span>
                </div>

                <div className="item__branding">
                    <input type="checkbox" name="" id="" />
                    <span>Không giới hạn</span>
                </div>

                <div className="item__branding">
                    <input type="checkbox" name="" id="" />
                    <span>Rẻ hơn hoàn tiền</span>
                </div>
            </div>
        </div>
    );
}

export default Filter;