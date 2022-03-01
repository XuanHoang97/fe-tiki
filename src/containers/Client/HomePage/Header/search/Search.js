import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchSuggest from './SearchSuggest';
import { path } from 'utils';
import { keywordSearch, searchResult, URLSearch } from 'store/actions';

export default function Search() {
    const [search, setSearch] = useState('');
    const [suggest, setSuggest] = useState(false);
    const inputSearch = useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();
    
    // Search
    const handleSearch = () => {
        try{
            setSuggest(false);
            let urlSearch = `${path.SEARCH}?q=${search}`;
            if(search !== ''){
                dispatch(keywordSearch(search));
                dispatch(URLSearch(urlSearch));
                dispatch(searchResult(search));
                history.push(urlSearch);
            }else{
                return;
            }
        }catch(e){
            console.log('error:',e);
        }
    }

    //press enter search
    const handleKeyDown=(e)=>{
        if(e.key=== 'Enter' || e.keyCode=== 13){     
            handleSearch();
        }
    }

    return (
        <div className="search input-group align-items-center">
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                ref={inputSearch}
                onFocus={() => setSuggest(true)}
                onKeyDown={handleKeyDown}
                type="text" className="form-control"
                placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn ..."
            />
            <SearchSuggest show={suggest} blur={() => setSuggest(false)} search={search} />

            <div
                onClick={() => handleSearch()}
                className="btn_search input-group-append">
                <button type="button" className="btn btn-primary p-0">
                    <img src="https://salt.tikicdn.com/ts/upload/ed/5e/b8/8538366274240326978318348ea8af7c.png" className="mr-1" alt="" style={{ width: '15%' }} />
                    <small>Tìm kiếm</small>
                </button>
            </div>
        </div>
    );
}