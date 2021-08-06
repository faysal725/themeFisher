import React from 'react';
import './Schedule.css';
import Tools from './Tools/Tools';

const tools = [
    {serial: 1, heading: "Manage your works effortlessly", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus ipsum recusandae cupiditate aspernatur! Omnis."},
    {serial: 2, heading: "Manage your works effortlessly", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus ipsum recusandae cupiditate aspernatur! Omnis."},
    {serial: 3, heading: "Manage your works effortlessly", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus ipsum recusandae cupiditate aspernatur! Omnis."},
    {serial: 4, heading: "Manage your works effortlessly", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus ipsum recusandae cupiditate aspernatur! Omnis."},
    {serial: 5, heading: "Manage your works effortlessly", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus ipsum recusandae cupiditate aspernatur! Omnis."},
    {serial: 6, heading: "Manage your works effortlessly", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis temporibus ipsum recusandae cupiditate aspernatur! Omnis."}
]

const Schedule = () => {

    // console.log(tools)
    return (
        <div>
            <div className="d-flex justify-content-center text-white pb-5">
                <h1 className="text-center">We Know Happy Schedule Is Tool <br/> Because We Use Every Day</h1>
            </div>
            <div className="d-flex row ">
                {
                    tools.map(tool=>   <Tools id={tool.serial} tool={tool}></Tools>)
                }
            </div>
        </div>
    );
};

export default Schedule;