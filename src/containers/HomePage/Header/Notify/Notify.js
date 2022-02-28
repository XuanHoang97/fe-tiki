import React from 'react';

function Notify(props) {
    return (
        <div className='px-4'>
            <i className="far fa-bell text-white position-relative" style={{fontSize: '17px'}}>
                <span className="badge badge-pill badge-danger position-absolute " style={{ top: '-10px', left: '10px' }}>
                    0
                </span>
            </i>
        </div>
    );
}

export default Notify;