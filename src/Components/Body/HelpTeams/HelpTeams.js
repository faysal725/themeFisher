import React from 'react';
import './HelpTeams.css'

const HelpTeams = () => {
    return (
        <div className="helpTeams__full d-flex row text-white">
            <div className="col-md-6 pb-3">
                    <h1><b>Helping teams in the <br />world with focus</b></h1>
                    <br />
                    <button className="btn btn-danger basic__btn">Download The Theme</button>
            </div>
            <div className="col-md-6 pt-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus repudiandae itaque exercitationem ex, sint ducimus mollitia praesentium fugit debiti</p>
            </div>
        </div>
    );
};

export default HelpTeams;