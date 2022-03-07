import React from 'react';

function Notification(props) {
    return (
        <>
            <div className="mess position-relative">
                <i className="far fa-bell"></i>
                <span className="badge badge-pill badge-danger" style={{position: 'absolute', top: '-5px', right : '-10px'}}>
                    0
                </span>
            </div>
        </>
    );
}
export default Notification;