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
                어떤 서비스인가요?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>투명한 가상화폐 공시정보를 제공하는 서비스 입니다. </Card.Body>
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
                회원가입해야 서비스를 이용 할 수 있나요?
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>아니요 회원가입을 하지않아도 서비스를 이용 할 수 있습니다.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>
    </div>
  );
};

export default Faq;
