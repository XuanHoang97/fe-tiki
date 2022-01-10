import React from 'react';

function Account(props) {
    return (
        <span className='d-flex align-items-center text-white px-5'>
            <img src="https://avatars.githubusercontent.com/u/38268599?v=4" className='rounded-circle mr-1' style={{width: '30px'}}  alt="" />
            <span>Account</span>
        </span>
    );
}

export default Account;