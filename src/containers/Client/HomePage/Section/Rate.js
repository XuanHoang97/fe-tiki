import React from 'react';

const Rate = () => {
    return (
        <div>
            <div className="vote" style={{fontSize:'9px'}}>
                <span className="fa fa-star checked text-warning" />
                <span className="fa fa-star checked text-warning" />
                <span className="fa fa-star checked text-warning" />
                <span className="fa fa-star text-warning" />
                <span className="fa fa-star text-secondary" />
            </div>
        </div>
    );
}
export default Rate;