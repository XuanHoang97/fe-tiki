import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { path } from 'utils';
import React from 'react';
import './NotFound.scss';

const NotFound = () => {
    const history = useHistory();
    return (
        <>
            <Header/>
            <div className="container main">
                <div className="err">
                    <img src="https://salt.tikicdn.com/ts/brickv2og/3c/7c/9b/1d101c4757843340d812828590283374.png" className='w-25' alt="" />
                </div>

                <div className='btn-quit'>
                    <div onClick={() => history.goBack()}>
                        <button type="button" className="btn btn-primary"><i className="fa fa-angle-left mr-2"></i> Quay lại trang trước</button>
                    </div>
                    <Link to={path.HOMEPAGE}>
                        <button type="button" className="btn btn-success">Trang chủ</button>
                    </Link>

                    <Link to={path.HOMEPAGE}>
                        <button type="button" className="btn btn-warning">Mua hàng</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default NotFound;