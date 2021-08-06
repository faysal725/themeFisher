import React from 'react';
import './Footer.css'
import FooterItems from './FooterItems/FooterItems';

const Footer = () => {
    return (
        <div className="footer__section pt-5">
            <div className="container footer__items pt-5">
                <FooterItems></FooterItems>
            </div>
            <footer className="pt-2 pb-2 text-white" style={{textAlign:"center"}}>Designed By Themefisher, developed by gethugothemes</footer>
        </div>
    );
};

export default Footer;