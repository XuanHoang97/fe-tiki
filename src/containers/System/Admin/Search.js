import React from 'react';

function Search(props) {
    return (
        <div className="input-group col-6">
            <input type="text" className="form-control" placeholder="Search..." />
            <div className="input-group-append">
                <button className="btn btn-success px-2"><i className="fas fa-search"></i></button>
            </div>
        </div>
    );
}

export default Search;