import React from 'react';

function Notification(props) {
    return (
        <div className="mess">
            <i className="far fa-bell"></i>
            <span className="badge badge-pill badge-danger"
                style={{position: 'absolute', right: '16rem', top: '0.35rem'}}>1</span>
        </div>
    );
}

export default Notification;