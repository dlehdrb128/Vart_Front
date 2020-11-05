import React from "react";
import "../App.css";
import { Button, Card, Container, Nav } from "react-bootstrap";
const Announcement = ({ history }) => {
  return (
    <div className="App">
      <header className="app-header">
        <div>공지사항</div>
      </header>
      <div className="app-body">
        <Container>
          <Card>
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#all">전체</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#notice">공지</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#press_release" disabled>
                    보도자료(Disabled)
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Announcement;
