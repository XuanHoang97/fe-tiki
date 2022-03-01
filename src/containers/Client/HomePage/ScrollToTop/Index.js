import React, { useEffect, useState } from 'react';
import './style.scss';

function ScrollTop() {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const scrollToTop = () => {
        return window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    };

    return (
        (scroll ? (
            <div className='ScrollContainer' onClick={() => scrollToTop()}>
                <div className='InScroll'>
                    <i className="fas fa-arrow-alt-circle-up control"></i>
                </div>
            </div>
        ) : 'no scroll...')
    );
}

export default ScrollTop;