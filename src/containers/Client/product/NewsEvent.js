import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const NewsEvent = () => {
    const dispatch = useDispatch()

    useEffect(() => {
    }, [dispatch])

    return (
        <div className="col-md-4">
            <h5 className="mb-4">Tin tức và sự kiện</h5>
            <div className="list_news row pl-3">

                <div className="row mb-2 col-md-12 p-0">
                    <img className="col-md-4" src="" alt="" />
                    <small className="col-md-8 p-0">content</small>
                </div>
                    
            </div>
        </div>
    );
}

export default NewsEvent;