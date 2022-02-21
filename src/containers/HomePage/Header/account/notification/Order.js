import React, { useEffect, useState } from 'react';
import axios from "axios";
import Pagination from "react-js-pagination";

function Order(props) {
    const [data, setData] = React.useState([]);
    const [activePage, setActivePage] = useState(1);
    
    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
        .then((res) => {
            setData(res.data);
        });
    }, []);

    const handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        axios
        .get( `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=20` )
        .then((res) => {
            setData(res.data);
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
                                {item.title}
                            </li>
                        );
                    })
                    : <div>Loading...</div>
                }
            </ul>
            <Pagination
            totalItemsCount={150}
            onChange={handlePageChange}
            activePage={activePage}
            itemsCountPerPage={10}
            pageRangeDisplayed={5}
            />
        </div>
    );
}
export default Order;