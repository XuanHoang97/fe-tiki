import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../store/actions";

export default function Category() {
    const dispatch = useDispatch()
    const listCategory = useSelector(state => state.admin.specialCategories)

    useEffect(() => {
        dispatch(actions.fetchAllSpecialCategory())
    }, [dispatch])
    
    return (
        <div className="category__hightlight mt-3 p-3 bg-white">
            <h5><span className="text-danger">Danh Mục Nổi Bật</span></h5>
            <div className="list__category pt-4 pl-2 pr-2 row">
                {
                    listCategory && listCategory.length > 0 ?
                    listCategory.map((item, index) => {
                        return (
                            <div className="col-md-1 col-6 p-0 text-center" key={index}>
                                <Link to="">
                                    <img src={item.image} className="rounded-circle w-50" alt="" />
                                    <p className="text-center text-dark mt-2 small">{item.name}</p>
                                </Link>
                            </div>
                        )
                    }
                    ) : 'loading...'
                }
            </div>
        </div>
    );
}