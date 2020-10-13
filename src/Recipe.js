import React from 'react';

const Recipe = (props) => {
    return (
        <div  className="boxes">
            <h1 id="boxTitle">{props.label}</h1>
            <p id="details">{props.details[0]}</p>
            <p id="details">{props.details[1]}</p>
            <p id="details">{props.details[2]}</p>
        </div>
    );
};

export default Recipe;
