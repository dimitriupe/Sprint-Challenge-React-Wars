import React from "react";
import "./StarWarsData.css";

const StarWarsData = props => {

    console.log('post: ', props.post);

    return (
        <div className="character-details">
            <h2>Character Name: {props.person.name}</h2>
            <h3>URL: {props.person.url}</h3>
            <h3>Year of Birth: {props.person.birth_year}</h3>
            <h3>Height: {props.person.height}</h3>
        </div>
    );
};

export default StarWarsData;