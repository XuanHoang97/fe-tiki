import React, { useEffect, useState } from 'react';
import axios from "axios";
import Pagination from "react-js-pagination";
import { path } from 'utils';
import './pagination.scss'

function Order(props) {
    const [data, setData] = React.useState([]);
    const [activePage, setActivePage] = useState(1);
    
    useEffect(() => {
        axios.get(`${path.PORT}/news/${activePage}`)
        .then((res) => {
            setData(res.data.result);
        });
    }, [ activePage ]);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        axios.get(`${path.PORT}/news/${activePage}`)
        .then((res) => {
            setData(res.data.result);
        });
        setActivePage(pageNumber);
    };

    return (
        <div>
            <ul>
                {
                    data && data.length > 0 ?
                    data.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.name}
                            </li>
                        );
                    })
                    : <div>Loading...</div>
                }
            </ul>
            <Pagination
                totalItemsCount={10}
                onChange={handlePageChange}
                activePage={activePage}
                itemsCountPerPage={3}
                pageRangeDisplayed={3}
            />
        </div>
    );
}
export default Order;