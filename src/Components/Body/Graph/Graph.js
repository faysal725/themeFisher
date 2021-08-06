import React from 'react';
import Chart from './Chart/Chart';
import './Graph.css'
import GraphFeatures from './GraphFeatures/GraphFeatures';


const features = [
    {serial: 1, point: "Decision with impact make data",  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex dolorum porro pariatur ullam laudantium?", color:   "#0489CA"},
    {serial: 2, point: "Focus only value on Real Activities",  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex dolorum porro pariatur ullam laudantium?", color: "#FFBD2F"},
    {serial: 3, point: "Manage your works effortlessly",  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex dolorum porro pariatur ullam laudantium?", color: "#FF3A44"},
]


const Graph = () => {
    return (
        <div className="d-flex row text-white">

            <div className="col-md-6 px-5">
                <div className=" d-flex flex-column bd-highlight mb-3 pt-5">
                {
                    features.map(feature => <GraphFeatures feature={feature} ></GraphFeatures>)
                }
                </div>

            </div>
            <div className="col-md-6">
                <Chart></Chart>
            </div>

        </div>
    );
};

export default Graph;