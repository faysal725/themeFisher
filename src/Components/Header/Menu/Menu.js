import React from 'react';
import './Menu.css'
import logo from '../../../assests/logo.svg'

const Menu = () => {
    return (
        <div>


            <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <img src={logo} alt="" />
                </div>
                
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav main__nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Category</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Testimonial</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div  className="d-flex align-items-center">
                    <button type="button" class="btn btn-danger basic__btn sign__up__btn">Left</button>
                </div>
            </div>
        </div>
    );
};

export default Menu;