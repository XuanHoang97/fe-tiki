import React, { useEffect, useState } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';
import TabCoin from './TabCoin';
import { getPoint } from 'store/actions';
import './style.scss'
import { formatDate } from 'components/Formatting/FormatDate';

const TikiXu = (props) => {
    const user = useSelector(state => state.auth.user);
    const [activeTab, setActiveTab] = useState('1');
    const TikiPoint = useSelector(state => state.auth.point);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPoint(user ? user.id : ''));
    }, [dispatch, user]);


    console.log('point user:', TikiPoint, TikiPoint.point);

    return (
        <div>
            <div className='coin-overview '>
                <div className='myCoin '>
                    <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/paymentfe/75efaf1b556a8e2fac6ab9383e95d4e3.png" alt='' />
                    <div className='numbCoin'>{TikiPoint ? TikiPoint.point : '' }</div>
                    <div className='coin-current'>
                        <span>Xu đang có</span>
                        <div>100 Tiki xu sẽ hết hạn vào 30/06/2022 
                            <i className="fas fa-angle-right ml-2"></i>
                        </div>
                    </div>
                </div>

                <div className='getMoreCoin'>
                    Nhận thêm xu 
                    <i className="fas fa-angle-right ml-2"></i>
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
                        TikiPoint && TikiPoint.pointData ?
                        <div className='coin-item'>
                            <div className='d-flex align-items-center'>
                                <img src={TikiPoint.pointData.icon} style ={{width: '70px', height:'70px'}} alt="" />
                                <div className='listGetCoin ml-3'>
                                    <div className='coin-title'>{TikiPoint.pointData.content}</div>
                                    <div className='text-secondary small'>{formatDate(TikiPoint.pointData.date)}</div>
                                </div>
                            </div>
                            <span className="text-warning">+{TikiPoint.pointData.point}</span>
                        </div>
                        : ''
                    }

                    {/* <div className='coin-item'>
                        <div className='d-flex align-items-center'>
                            <img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/272340942_700347570961115_6022362743395743610_n.png?_nc_cat=103&ccb=1-5&_nc_sid=aee45a&_nc_ohc=7pNP2_Od_g0AX_jOx9A&_nc_oc=AQnWvP2d527Y9wm54A71ggwgzSk3XI-8nHGQHDkjtF6z_EtH5k2KVUOsrpU80jBaz3e44lCrqsufuwfWpKjvC2iQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVILK4jR9TpasQY6ainv0CAHlos3MBv3zQWMFpQGx8Hzyg&oe=624D6B93' style ={{width: '70px', height:'70px'}} alt="" />
                            <div className='listGetCoin ml-3'>
                                <div className='coin-title'>Hạn sử dụng của Tiki xu</div>
                                <div className='text-secondary small'>8:57 09/03/2022</div>
                            </div>
                        </div>
                        <span className="text-secondary">-1.000</span>
                    </div> */}
                </TabPane>
                <TabPane tabId="2">Updating...</TabPane>
                <TabPane tabId="3"> updating... </TabPane>
            </TabContent>
        </div>
    );
}
export default TikiXu;