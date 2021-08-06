import React from 'react';
import './Collaborative.css';
import bell from '../../../assests/icon/bell.svg'
import clip from '../../../assests/icon/clip.svg'
import board from '../../../assests/icon/board.svg'



const Collaborative = () => {
    return (
        <div className="pt-5 text-white pb-5">
            <div style={{textAlign:"center"}}>
                <h1><b>Colaborative Workspace For Every  <br /> Each Meeting For Easy Access</b></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit. Laudantium reiciendis modi non!</p>
            </div>
            <div className="d-flex row justify-content-center">
                    
                    <div style={{backgroundColor:"#FF3A44"}} className="card col-md-3 m-3 card__cell" >
                        <div className="d-flex justify-content-center pt-4">
                            <div className="card__icon">
                                <img src={bell} alt="" />
                            </div>
                        </div>
                        <div className="card-body">
                        <h5 className="card-title"><b>Focus only value on Real activities</b></h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ex, in nisi expedita magnam voluptatibus quis hic obcaecati quibusdam odit.</p>
                        </div>
                    </div>

                    <div style={{backgroundColor:"#FFBD2F"}} className="card col-md-3 m-3 card__cell">
                        <div className="d-flex justify-content-center pt-4">
                            <div className="card__icon">
                                <img src={clip} alt="" />
                            </div>
                        </div>
                        <div className="card-body">
                        <h5 className="card-title"><b>Manage your works effortlessly</b></h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ex, in nisi expedita magnam voluptatibus quis hic obcaecati quibusdam odit.</p>
                        </div>
                    </div>

                    <div style={{backgroundColor:"#0489CA"}} className="card col-md-3 m-3 card__cell">
                        <div className="d-flex justify-content-center pt-4">
                            <div className="card__icon">
                                <img src={board} alt="" />
                            </div>
                        </div>
                        <div className="card-body">
                        <h5 className="card-title"><b>Decisiion with impact make data driven</b></h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ex, in nisi expedita magnam voluptatibus quis hic obcaecati quibusdam odit.</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Collaborative;