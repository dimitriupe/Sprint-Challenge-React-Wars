import React from "react";
import "./StarWarsData.css";

const StarWarsData = props => {

    console.log('post: ', props.post);

    return (
        <div className="character-details">
            <h2>Character Name: {props.name}</h2>
            <h3>URL: {props.url}</h3>
            <h3>Year of Birth: {props.birth_year}</h3>
            <h3>Height: {props.height}</h3>
        </div>
    );
};

export default StarWarsData;