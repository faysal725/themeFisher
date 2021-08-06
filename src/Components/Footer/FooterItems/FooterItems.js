import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import footerlogo from '../../../assests/logo2.svg';

const FooterItems = () => {
    return (
        <div className="d-flex row text-white">
            <div className="col-md-6 col-lg-3 pb-3">
                <img src={footerlogo} alt="" />
                <br /><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, laudantium.</p>
            </div>
            <div className="col-md-6 col-lg-3 pb-3">
                <h5><b>Socials</b></h5>
                <br />
                <p>themefisher@gmail.com</p>
                <br />
                <div className="d-flex row">
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
            <div className="col-md-6 col-lg-3 pb-3">
                <h5><b>Quick Links</b></h5>
                <ul style={{listStyle:"none", padding:"0", margin:"0"}}>
                    <li>About</li>
                    <li>Category</li>
                    <li>Testimonial</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="col-md-6 col-lg-3 pb-3">
                <h5><b>Location & Contact</b></h5>
                    <ul style={{listStyle:"none", padding:"0", margin:"0"}}>
                        <li>2118 tharmidge cir. syracuse connectuct 35624</li>
                        <li>(704) 555-0127</li>
                        
                    </ul>
            </div>
        </div>
    );
};

export default FooterItems;