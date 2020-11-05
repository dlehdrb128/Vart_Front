import React from "react";
import "../App.css";
import ControlledCarousel from "./partials/ControlledCarousel";
import MainProjectList from "../components/MainProjectList/MainProjectList";

const MainPage = () => {
  return (
    <div className="App">
      <header className="app-header">
        <ControlledCarousel />
      </header>
      <MainProjectList />
    </div>
  );
};
export default MainPage;
