import axios from "axios";
import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

const Features = () => {
  const [movie, setMovie] = useState("");
  const [list, setList] = useState([]);

  React.useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${movie}&apikey=5cab87b3&plot=full`)
      .then((res) => {
        setList(res.data.Search);
      });
  }, [movie]);

  return (
    <>
      <Form.Label htmlFor="inputPassword5">Search For IMDB Movies</Form.Label>
      <Form.Control
        type="text"
        onChange={(event) => setMovie(event.target.value)}
      />
      <Row className="mt-5">
        {list && list.length
          ? list.map((element, i) => (
              <Col md="4" className="mb-4">
                <Card key={i} className="h-100">
                  <Card.Img variant="top" src={element.Poster} />
                  <Card.Body>
                    <Card.Title>{element.Title}</Card.Title>
                    <Card.Text>{element.Type}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Year : {element.Year}</small>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          : null}
      </Row>
    </>
  );
};

export default Features;
