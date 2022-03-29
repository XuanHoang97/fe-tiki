import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { SpecialCategory } from 'store/actions';

function SearchSuggest(props) {
    const dispatch = useDispatch();
    const {show, blur, search} = props;
    const [showData, setShowData] = useState(true);

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
        dispatch(SpecialCategory())
    }, [dispatch])
    
    return (
        <div className="search-form" style={{ display: (show ? 'block' : 'none') }}>
            {showData ? 
                <div className="search__info" >
                    <div className="special__prod">
                        <small>Trend</small><hr/>
                        <div className="catg-special">
                            {
                                specialCategory.slice(0,6).map((item, index) => {
                                    return (
                                        <div className='item-catg' key={index}>
                                            <img src={item.image} alt="" />
                                            <div className='small'>{item.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                : 
                <div className="search__info" > Đang tìm kiếm <span className='text-primary'>{search}...</span> </div>
            }
            <div className='blur' onClick={blur}></div>
        </div>
    );
}
export default React.memo(SearchSuggest);