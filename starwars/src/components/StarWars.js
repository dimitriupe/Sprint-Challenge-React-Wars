import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsData from "./StarWarsData.js";

const StarWars = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
            .then(response => {
                setPeople(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log("The data was not returned", error);
            });
    }, []);

    return (
        <div>
            {people.map(item => {
                return <StarWarsData person={item} key={item.url} />
                // <li key={item.objectID}>
                //     <a href={item.url}>{item.title}</a>
                // </li>
            })};
            {/* {people.map((item) => {
                return <StarWarsData person={item} key={item.url} />;
            })} */}
        </div>
    );
}

export default StarWars;