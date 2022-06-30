import axios from "axios";
import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

function WeatherApp() {
  const handleOnSelect = (item) => {
    // the item selected
    setCity(item.name);
  };
  const [state, setState] = useState([]);
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState([]);

  React.useEffect(() => {
    axios
      .get(`https://api.countrystatecity.in/v1/countries/IN/states/TN/cities`, {
        headers: {
          "X-CSCAPI-KEY":
            "TXFBUUNjaDIxV3QwcHFQd1B2YzJpNkZYWXJtUEJtWGpsUnhjdXZpaQ==",
        },
      })
      .then((res) => {
        setState(res.data);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3a844b9472f8e93463934bc94d9d987b`
      )
      .then((res) => {
        setTemp(res.data.main);
      });
  }, [city]);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const condition = temp.temp >= 30;

  return (
    <>
      <Row className="justify-content-center my-auto">
        <Col md="4">
          <div>
            <ReactSearchAutocomplete
              items={state}
              onSearch={handleOnSearch}
              onSelect={handleOnSelect}
              autoFocus
              styling={{ borderRadius: "0px" }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center position-inherit">
        <Col md="4">
          <Card
            class={condition ? "bg-hot" : "bg-cool"}
            className="bg-dark position-static"
          >
            <Card.Body className="">
              <Card.Title className="mb-5 text-center">Weather</Card.Title>
              <Card.Text className="text-center">
                <p>Temp : {temp.temp}° c</p>
                <p>Feels Like : {temp.feels_like}° c</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default WeatherApp;
