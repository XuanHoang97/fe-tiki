import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {TabContent, TabPane} from 'reactstrap';
import {totalRevenue} from 'components/Formatting/FormatNumber';
import ModalVerifyOrder from './ModalVerifyOrder';
import FilterDataOrder from './FilterDataOrder';
import Statistical from './Statistical';
import './style.scss';
import * as actions from 'store/actions';
import OrderTabControl from './OrderTabControl';
import ListOrder from './ListOrder';

const OrderManage = (props) => {
    const [activeTab, setActiveTab] = useState('4');
    const [modalVerifyOrder, setModalVerifyOrder] = useState(false);
    const [updateOrder, setUpdateOrder] = useState([]);
    const [StatusOrder, setStatusOrder] = useState('');
    const [loadOrder, setLoadOrder] = useState(false);

    //fetch data order
    const dispatch = useDispatch();
    const order = useSelector(state => state.client.orders);
    const status = useSelector(state => state.client.statusOrder);
    const filterOrder = useSelector(state => state.client.filterOrder);

    useEffect(() => {
        dispatch(actions.getAllOrder());
        dispatch(actions.getStatusOrder());
        dispatch(actions.filterOrderByStatus('S0'));
    }, [dispatch])

    //update order
    const verifyOrder = (order) => {
        setUpdateOrder(order);
        setModalVerifyOrder(!modalVerifyOrder);
    }
    const handleUpdateOrder = (data) => {
        dispatch(actions.updateOrderStatus(data));
    }

    // Filter order
    const FilterOrder = (e) => {
        setLoadOrder(true);
        setStatusOrder(e.target.value);
        setTimeout(() => {
            dispatch(actions.filterOrderByStatus(e.target.value));
            setLoadOrder(false);
        }, 1000);
    }

    return (
        <div className="mx-2">
            <ModalVerifyOrder
                isOpen={modalVerifyOrder}
                toggle={verifyOrder}
                updateOrder={updateOrder}
                handleUpdateOrder={handleUpdateOrder}
            />

            <div className="h5 text-dark mb-3">Quản lý đơn hàng</div>
            {/* Tab control order  */}
            <OrderTabControl
                status={status}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                order={order}
            />

            <TabContent activeTab={activeTab} className='p-3 py-4 bg-light border'>
                <TabPane tabId={activeTab}>
                    {/*Filter order */}
                    {
                        activeTab === '4' ?
                        <FilterDataOrder
                            StatusOrder={StatusOrder}
                            status={status}
                            FilterOrder={FilterOrder}
                        /> : ''
                    }

                    {/* Display list order */}
                    <ListOrder
                        filterOrder={filterOrder}
                        loadOrder={loadOrder}
                        verifyOrder={verifyOrder}
                    />

                    {/* statistical  */}
                    <Statistical
                        totalRevenue={totalRevenue}
                        filterOrder={filterOrder}
                    />
                </TabPane>
            </TabContent>
        </div>
    );
}
export default OrderManage;
