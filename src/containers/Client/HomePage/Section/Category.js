import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SpecialCategory } from "store/actions";
import { Link } from "react-router-dom";

export default function Category() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.admin.specialCategories)

    useEffect(() => {
        dispatch(SpecialCategory())
    }, [dispatch])
    
    return (
        <div className="hightLight">
            <h5><span className="text-danger">Danh Mục Nổi Bật</span></h5>
            <div className="list__category">
                {
                    categories?.length > 0 ?
                    categories.map((item, index) => {
                        return (
                            <div className="categoryItem" key={index}>
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