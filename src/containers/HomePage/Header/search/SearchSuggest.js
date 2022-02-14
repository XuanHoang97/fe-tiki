import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../store/actions';

function SearchSuggest(props) {
    const {show, blur, search} = props;
    const [showData, setShowData] = useState(true);
    const dispatch = useDispatch();

    // filter search data
    useEffect(() => {
        if (search === '') {
            setShowData(true)
        } else {
            setShowData(false)
        }
    }, [search])

    // fetch special product
    const specialCategory = useSelector(state => state.admin.specialCategories);
    useEffect(() => {
        dispatch(actions.fetchAllSpecialCategory())
    }, [dispatch])
    
    return (
        <div className="search-form" style={{ display: (show ? 'block' : 'none') }}>
            {showData ? 
            <div className="search__info" >
                <div className="suggest">
                    <div className="history">
                        <div className="item_log">
                            <img src="https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png" alt="" />
                            <span>Phone</span>
                        </div>
                        <div className="close text-right">
                            <img src="https://salt.tikicdn.com/ts/upload/5c/a1/7e/cd8cde79e81844f2c394efdc415f5441.png" alt="" />
                        </div>
                    </div>
                </div>
                <hr/>

                <div className="special__prod">
                    <h6>Danh Mục Nổi Bật</h6>
                    <div className="list__prod">
                        {
                            specialCategory.slice(0,6).map((item, index) => {
                                return (
                                    <div className="item--prod" key={index}>
                                        <img src={item.image} alt="" />
                                        <span>{item.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            : 
            <div className="search__info p-3" > Đang tìm kiếm <span className='text-primary'>{search}...</span> </div>
            }

            <div className='blur' onClick={blur}></div>
        </div>
    );
}
export default React.memo(SearchSuggest);