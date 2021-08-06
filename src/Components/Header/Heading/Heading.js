import React from 'react';
import Menu from '../Menu/Menu';
import videoImg from '../../../assests/headSectionVideo.svg'


const Heading = () => {
    return (
        <div  className="container pb-5">
            <Menu></Menu>
            <div className="d-flex row pt-5">
                <div className="col-md-6 col-sm-12 pb-3">
                    <h1><b>Everything For Your <br /> Remote Meeting <br /> All In One Place</b></h1>
                    <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quibusdam a dicta facere fugiat repellendus cumque, sint unde ipsam earum!</p>
                    <button className="btn btn-danger basic__btn download__btn">Download The Theme</button>
                </div>
                <div className="col-md-6 col-sm-12 pb-3">
                    <img src={videoImg} alt="" className="img-fluid" />
                    <div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heading;