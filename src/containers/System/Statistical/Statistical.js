import React, { useState } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import TabStatistical from './TabStatistical';
import './style.scss';

const StatisticalManage = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    return (
        <div className="statistical p-2 bg-white">
            <h5 className="mb-3">Báo cáo thống kê</h5>
            <TabStatistical
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <TabContent activeTab={activeTab} className ="content-statistical">
                <TabPane tabId="1" className='report-revenue'>
                    test
                </TabPane>
                <TabPane tabId="2">Updating...</TabPane>
                <TabPane tabId="3"> updating... </TabPane>
            </TabContent>
        </div>
    );
}
export default StatisticalManage;
