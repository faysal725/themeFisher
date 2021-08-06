import React from 'react';
import './Body.css'
import Collaborative from './Collaborative/Collaborative';
import Schedule from './Schedule/Schedule';

const Body = () => {
    return (
        <div className="container pt-5">
            <Collaborative></Collaborative>
            <Schedule></Schedule>
        </div>
    );
};

export default Body;