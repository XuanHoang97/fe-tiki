import React from 'react';
import Header from './Header/Header';
import Body from './Section/Body';
import Footer from './Footer/Footer';
import ScrollTop from './../HomePage/ScrollToTop/Index';

function HomePage(props) {
    return (
        <div>
            <Header />
            <Body />
            <Footer />
            <ScrollTop />
        </div>
    );
}

export default HomePage;