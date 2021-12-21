import React from 'react';

function Title(props) {
    return (
        <div className="module py-1 px-3 d-flex align-items-center" style={{width: '18%', background: 'rgb(62, 112, 255)'}}>
            <span className="mr-3">Quản lý hệ thống </span>
            <img src="https://huflitjobhub.com/wp-content/uploads/2021/09/uwc1625303270.png" alt="" 
                style={{width: '30px'}}
                className="rounded-circle" />
        </div>
    );
}

export default Title;