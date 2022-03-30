import React, { useEffect, useState } from 'react';
import { formatDate } from 'components/Formatting/FormatDate';
import {numberFormat} from 'components/Formatting/FormatNumber';
import {useSelector, useDispatch} from 'react-redux';
import { TabContent, TabPane } from 'reactstrap';
import { getPoint } from 'store/actions';
import TabCoin from './TabCoin';
import './style.scss';

const TikiXu = (props) => {
    const user = useSelector(state => state.auth.user);
    const TikiPoint = useSelector(state => state.auth.point);
    const [activeTab, setActiveTab] = useState('1');
    const dispatch = useDispatch();

    useEffect(() => {
        let userId = user ? user.id : null;
        dispatch(getPoint(userId));
    }, [dispatch, user]);

    return (
        <div>
            <div className='coin-overview '>
                <div className='myCoin '>
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/paymentfe/75efaf1b556a8e2fac6ab9383e95d4e3.png" alt='' />
                    <div className='numbCoin'>{numberFormat(TikiPoint ? TikiPoint.point : 0 )}</div>
                    <div className='coin-current'>
                        <span>Xu đang có</span>
                        <div>100 Tiki xu sẽ hết hạn vào 30/06/2022 
                            <i className="fas fa-angle-right ml-2"></i>
                        </div>
                    </div>
                </div>

                <div className='getMoreCoin'>
                    Nhận thêm xu <i className="fas fa-angle-right ml-2"></i>
                </div>
            </div>
            <hr/>

            <TabCoin
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    {
                        TikiPoint?.pointData ?
                        TikiPoint.pointData.reverse().map((item, index) => {
                            return (
                                <div className='coin-item' key={index}>
                                    <div className='d-flex align-items-center'>
                                        <img src={item.icon} style ={{width: '70px', height:'70px'}} alt="" />
                                        <div className='listGetCoin ml-3'>
                                            <div className='coin-title'>{item.content}</div>
                                            <div className='text-secondary small'>{formatDate(item.date)}</div>
                                        </div>
                                    </div>
                                    <span className="text-warning">+ {numberFormat(item.point)}</span>
                                </div>
                            )
                        })
                        : 'Chưa có dữ liệu'
                    }
                </TabPane>
            </TabContent>
        </div>
    );
}
export default TikiXu;