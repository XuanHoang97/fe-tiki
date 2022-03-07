import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TabContent, TabPane } from 'reactstrap';
import * as actions from './../../../store/actions';
import TabStatistical from './TabStatistical';
import './style.scss';

const StatisticalManage = (props) => {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('1');

    useEffect(() => {
        dispatch(actions.filterOrderByStatus('S0'));
    }, [dispatch])

    return (
        <div className="p-2 bg-white">
            <div className="h5 text-dark mb-3">Báo cáo thống kê</div>
            <TabStatistical
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab} className='py-4 px-3 bg-light border'>
                <TabPane tabId="1">
                    test
                </TabPane>
                <TabPane tabId="2">Updating...</TabPane>
                <TabPane tabId="3"> updating... </TabPane>
            </TabContent>
        </div>
    );
}
export default StatisticalManage;
