import React from 'react';

function Notification(props) {
    return (
        <div className="mess mx-3">
            <i className="far fa-bell"></i>
            <span className="badge badge-pill badge-danger"
                style={{position: 'absolute', right: '19.2rem', top: '0.35rem'}}>1</span>
            <i className="fab fa-facebook-messenger mx-4"></i>
            <span className="badge badge-pill badge-danger"
                style={{position: 'absolute', right: '21.5rem', top: '0.35rem'}}>2</span>
            <i className="far fa-flag"></i>
            <span className="badge badge-pill badge-danger"
                style={{position: 'absolute', right: '17rem', top: '0.35rem'}}>3</span>
        </div>
    );
}

export default Notification;