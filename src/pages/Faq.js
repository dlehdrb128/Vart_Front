import React from "react";
import "../App.css";
import { Image, Card, Accordion, Container } from "react-bootstrap";
const Faq = ({ history }) => {
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
        <div>고객센터</div>
      </header>
      <div className="faq-body">
        <Container>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
      <div className="faq-body">
        <Container>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Click me!
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
    </div>
  );
};

export default Faq;
