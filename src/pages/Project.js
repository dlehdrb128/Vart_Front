import React from "react";
import "../App.css";
import MainProjectList from "../components/MainProjectList/MainProjectList";
const Project = () => {
  return (
    <div className="App">
      <header className="app-header">
        <div>공시</div>
      </header>
      <MainProjectList />
    </div>
  );
};

export default Project;
