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
                        //endcode image
                        let imageBase64='';
                        if(item.image){
                            imageBase64=new Buffer(item.image, 'base64').toString('binary')
                        } 
                        return (
                            <div className="col-md-2 col-6" key={index}>
                                <Link to={`/category/${item.slug}`}>
                                    <div style={{backgroundImage: `url(${imageBase64})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '50px',
                                        width: '50px', margin: '0 auto'}} >
                                    </div>
                                    <p className="text-center">{item.name}</p>
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