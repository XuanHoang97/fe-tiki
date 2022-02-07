import React from 'react';
import Filter from './Filter';
import Product from './Product';
import Sort from './Sort';
// import Header from './../../HomePage/HomePage';

function SearchResult(props) {
    return (
        <React.Fragment>
            {/* <Header /> */}
            <div className="Result__search bg-light container py-3">
                <div className="product bg-white d-flex">
                    <Filter />

                    <div className="list__product col-9">
                        <div className="suggest__list">
                            <div>
                                <div >
                                    <div className="result py-2">
                                        <h5 className="m-0">Kết quả tìm kiếm cho
                                            `Hacker IELTS`: 5k+ kết quả</h5>
                                    </div>
                                    <Sort />
                                </div>
                            </div>

                            <div className="tab-content">
                                <div id="home" className="container tab-pane active"><br />
                                    <div className="list">
                                        <Product />
                                    </div>
                                </div>

                                <div id="menu1" className="container tab-pane fade"><br />
                                    <h6>Menu 1</h6>
                                </div>

                                <div id="menu2" className="container tab-pane fade"><br />
                                    <h6>Menu 2</h6>
                                </div>

                                <div id="menu3" className="container tab-pane fade"><br />
                                    <h6>Menu 3</h6>
                                </div>

                                <div id="menu4" className="container tab-pane fade"><br />
                                    <h6>Menu 4</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SearchResult;