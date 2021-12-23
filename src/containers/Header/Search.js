import React from 'react';

function Search(props) {
    return (
        <div className="collapse_module d-flex align-items-center ml-3">
            <span><i className="fas fa-bars"></i></span>  

            {/* search  */}
            <div className="search input-group mx-4" style={{width: '350px'}}>
                <input type="text" className="form-control" placeholder="Search..."
                    style={{background: 'rgb(243 241 241)', height: '30px', borderRadius: '0'}} />
                <div className="input-group-append" style={{height: '30px'}}>
                    <button className="btn btn-light btn-sm px-2" style={{background :'rgb(243 241 241)'}}>
                        <i className="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Search;