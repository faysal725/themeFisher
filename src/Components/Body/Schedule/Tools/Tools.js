import React from 'react';

const Tools = (props) => {
    
    const {serial, heading, description} = props.tool
    console.log(heading)
    return (
        <div className="d-flex flex-row bd-highlight mb-3 col-md-4 text-white">

            <div className="p-2 bd-highlight">
            <h3 style={{color:"#FFBD2F"}} className="fs-1"><b>0{serial}</b></h3>
            </div>
            <div className="bd-highlight d-flex flex-column  mb-3">

            <div className="p-2 bd-highlight">
            <h3><b>{heading}</b></h3>
            </div>
            <div className="p-2 bd-highlight">
            <p>{description}</p>
            </div>
            
        </div>
        </div>
    );
};

export default Tools;