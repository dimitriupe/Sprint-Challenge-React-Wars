import React from "react";
import "./StarWarsData.css";
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";


const StarWarsData = props => {

    console.log('post: ', props.post);

    return (
        <Col xs="12" s="6" md="4" xl="3" >
          <Card>
            <CardHeader>Character Name: {props.person.name}</CardHeader>
            <CardBody>
              <CardText>URL: {props.person.url}</CardText>
              <CardText>Year of Birth: {props.person.birth_year}</CardText>
              <CardText>Height: {props.person.height}</CardText>
              </CardBody>
          </Card>
        </Col>
        // <div className="character-details">
        //     <h2>Character Name: {props.person.name}</h2>
        //     <h3>URL: {props.person.url}</h3>
        //     <h3>Year of Birth: {props.person.birth_year}</h3>
        //     <h3>Height: {props.person.height}</h3>
        // </div>
    );
};

export default StarWarsData;