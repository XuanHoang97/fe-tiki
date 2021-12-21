import React from 'react';

function Pagination(props) {
    return (
        <div className='d-flex justify-content-between'>
            <div className='file'>
                <button className='btn btn-outline-success border px-3 font-weight-normal'>
                    <i className="fas fa-download"></i> Nhập file
                </button>

                <button className='btn btn-outline-primary border px-3 font-weight-normal'>
                    <i className="fas fa-upload"></i> Xuất file
                </button>            
            </div>    

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
        </div>

    );
}

export default Pagination;