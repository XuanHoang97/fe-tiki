import React from 'react';
import Footer from 'containers/HomePage/Footer/Footer';
import Header from 'containers/HomePage/Header/Header';
import ContactDeliver from './ContactDeliver';
import DeliverPayments from './DeliverPayments';
import MethodPayment from './MethodPayment';

function Payment() {
    return (
        <>
            <Header />
            <div className="main bg-light pt-3 pb-3">
                <div className="container">
                    <div className="row m-1 justify-content-between">
                        <div className="col-md-9 pl-0 ">
                            <div className="bg-white p-3">
                                <DeliverPayments />
                                <MethodPayment />
                            </div>
                        </div>
                        <ContactDeliver />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Payment;
