import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Features from "./components/Features";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import WeatherApp from "./components/Weather";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <Container className="p-5">
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="Features" element={<Features />} />
          <Route path="Weather" element={<WeatherApp />} />
        </Routes>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
