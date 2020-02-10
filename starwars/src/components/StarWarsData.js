import React from "react";
import "./StarWarsData.css";

const StarWarsData = props => {

    console.log('post: ', props.post);

    return (
        <div className="character-details">
            <h2>{props.name}</h2>
            <h3>{props.url}</h3>
            <h3>{props.birth_year}</h3>
            <h3>{props.height}</h3>
        </div>
    );
};

export default StarWarsData;