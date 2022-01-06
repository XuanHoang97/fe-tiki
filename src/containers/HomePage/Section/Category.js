import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Category() {
    const dispatch = useDispatch()

    useEffect(() => {

    }, [dispatch])

    
    return (
        <div className="category__hightlight mt-3 p-3 bg-white">
            <h5><span className="text-danger">Danh Mục Nổi Bật</span></h5>
            <div className="list__category pt-4 pl-2 pr-2 row">
                
                <div className="col-md-1 col-4 p-0 text-center" style={{ cursor: 'pointer' }}>
                    <Link to="">
                        <img className="w-50 rounded-circle" src="https://salt.tikicdn.com/cache/w100/ts/category/a6/9f/45/460fdecbbe0f81da09c7da37aa08f680.png.webp" alt="" />
                        <h6 className="small pt-2 text-dark" style={{ fontSize: '12px' }}>special</h6>
                    </Link>
                </div>
       
            </div>
        </div>
    );
}