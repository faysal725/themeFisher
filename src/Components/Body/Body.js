import React from 'react';
import Footer from '../Footer/Footer';
import './Body.css'
import Collaborative from './Collaborative/Collaborative';
import Customers from './Customers/Customers';
import Graph from './Graph/Graph';
import HelpTeams from './HelpTeams/HelpTeams';
import Schedule from './Schedule/Schedule';

const Body = () => {
    return (
        <div className="container pt-5">
            <Collaborative></Collaborative>
            <Schedule></Schedule>
            <Graph></Graph>
            <Customers></Customers>
            <HelpTeams></HelpTeams>
            <Footer></Footer>
        </div>
    );
};

export default Body;