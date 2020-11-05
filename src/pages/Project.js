import React from "react";
import "../App.css";
import MainProjectList from "../components/MainProjectList/MainProjectList";
import { Image } from 'react-bootstrap';
const Project = () => {
  return (
    <div className="App">
      <header className="app-header">
        <Image
          className="cc-carousel-item-image"
          src={require("../images/VART_.png")}
          width="300px"
          height="200px"
          alt="First slide"
          fluid
          href="/" />
      </header>
      <MainProjectList />
    </div>
  );
};

export default Project;
