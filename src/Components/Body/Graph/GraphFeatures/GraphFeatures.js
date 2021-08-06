import React from 'react';
import './GraphFeatures.css'

const GraphFeatures = (props) => {
    console.log(props)
    const {serial, point, description, color} = props.feature
    return (
        <div class="p-3 bd-highlight d-flex row feature__cell mb-4 graphFeatures__cell">
                
                <div className="col-1 ps-1">
                    <h5  
                    style={{backgroundColor:`${color}`,textAlign:"center",width:"30px",height:"30px", borderRadius:"50px"}}><b>{serial}</b>
                    </h5>
                    </div>
                <div className="col">
                    <h4>{point}</h4>
                    <p>{description}</p>
                </div>
        
        
        {/* <div className="p-2 bd-highlight">
            <h3 style={{color:"#FFBD2F"}} className="fs-1"><b>0{serial}</b></h3>
            </div>
            <div className="bd-highlight d-flex flex-column  mb-3">

            <div className="p-2 bd-highlight">
            <h3><b>{point}</b></h3>
            </div>
            <div className="p-2 bd-highlight">
            <p>{description}</p>
            </div>
        </div> */}
        
        
        
        </div>
    );
};

export default GraphFeatures;