import React from 'react';

function Search(props) {
    const { query, setQuery } = props;

    return (
        <div className="search input-group mx-4" style={{width: '350px'}}>
            <input type="text" className="form-control" placeholder="Search..."
                style={{background: 'rgb(243 241 241)', height: '30px', borderRadius: '0'}} 
                onKeyDown={props.handleKeyDown}    
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />

            <div className="input-group-append" style={{height: '30px'}}>
                <button  onClick={props.handleSearch} className="btn btn-light btn-sm px-2" style={{background :'rgb(243 241 241)'}}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    );
}

export default Search;