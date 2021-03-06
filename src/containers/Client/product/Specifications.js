import React from 'react';

function Specifications(props) {
    return (
        <>
            <h6 className="mt-4 mb-2">THÔNG SỐ KỸ THUẬT</h6>
            <div className="specification">
                <table className="table table-responsive table-striped">
                    <tbody>
                        <tr>
                            <td>Màn hình</td>
                            <td>Màn hình trước: 6.2", Màn hình chính: 7.6", HD+, Chính: Dynamic AMOLED 2X, phụ: Super AMOLED, 1768 x 2208 Pixel</td>
                        </tr>
                        <tr>
                            <td>Camera sau</td>
                            <td>12.0 MP + 12.0 MP + 12.0 MP</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>12 GB</td>
                        </tr>
                        <tr>
                            <td>ROM</td>
                            <td>256 GB</td>
                        </tr>
                        <tr>
                            <td>Dung lượng Pin</td>
                            <td>4500 mAh</td>
                        </tr>
                        <tr>
                            <td>Xuất xứ</td>
                            <td>Việt Nam</td>
                        </tr>
                        <tr>
                            <td>Thời gian ra mắt</td>
                            <td>07/2021</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Specifications;