import React from 'react';

function Search(props) {
    const { query, setQuery } = props;

    return (
        <div className="search input-group mx-4" style={{width: '350px'}}>
            <input type="text" className="form-control" placeholder="Search..."
                style={{background: 'white', height: '28px', borderRadius: '0'}} 
                onKeyDown={props.handleKeyDown}    
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />

            <div className="input-group-append">
                <button  onClick={props.handleSearch} className="btn btn-light btn-sm" style={{background :'white'}}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    );
}

export default Search;