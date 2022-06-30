import React from "react";
import { Card } from "react-bootstrap";

const CardImg = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{props.year}</small>
      </Card.Footer>
    </Card>
  );
};

CardImg.defaultProps = {
  image: "https://picsum.photos/201",
};

export default CardImg;
