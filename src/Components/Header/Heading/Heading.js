import React from 'react';
import './Heading.css'
import Menu from '../Menu/Menu';
import videoImg from '../../../assests/headSectionVideo.svg';
import loop from '../../../assests/loop.svg'
import playbtn from '../../../assests/playbutton2.svg'
import loop2 from '../../../assests/loop3.svg'

const Heading = () => {
    return (
        <div  className="container pb-5">
            <Menu></Menu>
            <div className="position-relative d-flex row pt-5">
                <img className="position-absolute loop1" src={loop2} alt="" />
                
                {/* <img className="position-absolute loop2" src={loop} alt="" /> */}
                <div className="col-md-6 col-sm-12 pb-3">
                    <h1><b>Everything For Your <br /> Remote Meeting <br /> All In One Place</b></h1>
                    <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quibusdam a dicta facere fugiat repellendus cumque, sint unde ipsam earum!</p>
                    <button className="btn btn-danger basic__btn download__btn">Download The Theme</button>
                </div>
                <div className="col-md-6 col-sm-12 pb-3 position-relative">
                    <img src={videoImg} alt="" className="img-fluid" />
                    <img className="position-absolute play__btn img-fluid" src={playbtn} alt=""/>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heading;