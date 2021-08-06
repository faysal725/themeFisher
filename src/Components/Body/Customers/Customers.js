import React from 'react';
import './Customers.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCoffee, faDotCircle, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import customerImg from '../../../assests/customerImage.svg';
import customerholder from '../../../assests/customerHolder.svg';
import customer from '../../../assests/customer.svg';
import quotation from '../../../assests/icon/quotation.svg';


const Customers = () => {
    return (

        <div className=" text-white py-5">

        <div style={{textAlign:"center"}}>
        <h2><b>Our Customers Have Nice <br />Things To Say About Us</b></h2>
        </div>
        <div className="d-flex row justify-content-center">
                
                
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active d-flex row">
                <div className="col align-items-end">
                    <img src={customerImg} className="slideImage" alt="..."/>
                </div>
                <div className="col">
                    <br /><br />
                    <FontAwesomeIcon icon={faQuoteLeft} className="fa-3x text-warning mb-1 "/>
                    <p className="customerSay">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis a laborum ipsa sint voluptatem sunt. Repellendus earum molestiae odio alias modi mollitia consectetur repudiandae reprehenderit, quia nemo, aspernatur laborum tenetur. lorem50</p>
                    <h5><b>Jhony Bravo</b></h5>
                    <p className="customerSay">CEO, THEMEFISHER</p>
                        <FontAwesomeIcon icon={faCircle} className="text-warning mx-1"/>
                        <FontAwesomeIcon icon={faCircle} className=" text-secondary mx-1"/>
                        <FontAwesomeIcon icon={faCircle} className=" text-secondary mx-1"/>
                </div>
                
            </div>


            <div className="carousel-item d-flex row">
                <div className="col align-items-end">
                <img src={customerImg} className="slideImage" alt="..."/>
                </div>
                <div className="col">
                <br /><br />
                <FontAwesomeIcon icon={faQuoteLeft} className="fa-3x text-warning mb-1 "/>
                <p className="customerSay">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis a laborum ipsa sint voluptatem sunt. Repellendus earum molestiae odio alias modi mollitia consectetur repudiandae reprehenderit, quia nemo, aspernatur laborum tenetur. lorem50</p>
                <h5><b>Jhony Bravo</b></h5>
                <p className="customerSay">CEO, THEMEFISHER</p>
                    <FontAwesomeIcon icon={faCircle} className="text-warning mx-1"/>
                    <FontAwesomeIcon icon={faCircle} className=" text-secondary mx-1"/>
                    <FontAwesomeIcon icon={faCircle} className=" text-secondary mx-1"/>
                </div>
            </div>


            <div className="carousel-item d-flex row">
                <div className="col align-items-end">
                <img src={customerImg} className="slideImage" alt="..."/>
                </div>
                <div className="col">
                <br /><br />
                <FontAwesomeIcon icon={faQuoteLeft} className="fa-3x text-warning mb-1 "/>
                <p className="customerSay">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis a laborum ipsa sint voluptatem sunt. Repellendus earum molestiae odio alias modi mollitia consectetur repudiandae reprehenderit, quia nemo, aspernatur laborum tenetur. lorem50</p>
                <h5><b>Jhony Bravo</b></h5>
                <p className="customerSay">CEO, THEMEFISHER</p>
                    <FontAwesomeIcon icon={faCircle} className="text-warning mx-1"/>
                    <FontAwesomeIcon icon={faCircle} className="text-secondary mx-1"/>
                    <FontAwesomeIcon icon={faCircle} className="text-secondary mx-1"/>
                </div>
                
            </div>
            </div>
            
            </div>


        </div>
        </div>
    );
};

export default Customers;