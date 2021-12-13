import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    
};

function Pagination(props) {
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-end">
            <li className="page-item disabled">
                <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
                </a>
            </li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
                </a>
            </li>
            </ul>
        </nav>
    );
}

export default Pagination;