import React from "react";
import { Image, Container } from "react-bootstrap";

import "../../css/pages.css"

const ControlledCarouselBanel = () => {
  return (
    <Container className="cc-max">
      <Container>
        <div className="MainButton">
          <div className="MainFont"><h1>VART</h1></div>
          <h4>글로벌 가상자산 공시 플랫폼</h4>
          <h5>업계를 선도하는 파트너들과 함께합니다.</h5>
        </div>
        <Image
          className="image"
          src={require("../../images/VART_Main1.png")}
          width="400px"
          heigh="400px"
          alt="First slide"
          fluid
        />
      </Container>
    </Container>
  );
};

export default ControlledCarouselBanel;