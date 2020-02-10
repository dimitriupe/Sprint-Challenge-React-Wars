import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarWarsData from "./StarWarsData.js";
import { Container, Row } from "reactstrap";

const StarWars = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get('https://swapi.co/api/people')
            .then(response => {
                setPeople(response.data.results);
                console.log(response.data.results);
            })
            .catch(error => {
                console.log("The data was not returned", error);
            });
    }, []);

    return (
        <Container>
            <Row>
                {people.map(item => {
                    return <StarWarsData person={item} key={item.url} />
                })};
            </Row>
        </Container >
    );
}

export default StarWars;