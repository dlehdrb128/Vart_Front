import React, { useState, render } from "react";
import "../../App.css";
import "./css/cc.css"
import { Link } from "react-router-dom"
// import TutorLogin from "./components/TutorLogin";

import { Div, Button, Carousel, Image, Container } from "react-bootstrap";

const ControlledCarouselBanel = ({ history }) => {
  return (
    <Container className="cc-max">
      <Container>
        <div className="MainButton">
          <h1><div className="MainFont">VART</div></h1>
          <h3>글로벌 가상자산 공시 플랫폼</h3>
          <p>업계를 선도하는 파트너들과 함께합니다.</p>
          <hr></hr>
          <Link to="/Project">
            <Button>가상자산</Button>
          </Link>
          <Link to="/Newdisclosure">
            <Button>공시</Button>
          </Link>
        </div>
        <Image
          className="image"
          src={require("../../images/VART_Main1.png")}
          width="600px"
          heigh="600px"
          alt="First slide"
          fluid
        />

        <Container className="MainFont">

        </Container>
      </Container>
      {/* <Carousel.Item>
        <img
          src={require("../../images/Dawn2.gif")}
          height="400px"
          width="2000px"
          alt="Second slide"
          fluid
        />
        <Carousel.Caption>
          <h3>신뢰와 투명한 공시</h3>
          <p>세계속 가상자산 시장의 여명이 되겠습니다.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../../images/Dawn3.jpg")}
          width="2000px"
          alt="Third slide"
          fluid
        />
        <Carousel.Caption>
          <h3>지금 당장 이용하세요!</h3>
          <p>RIGHT NOW!</p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Container>
  );
};

export default ControlledCarouselBanel;