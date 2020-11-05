import React from 'react'
import {  Button, Card, Container  } from 'react-bootstrap';
import manimage from "../images/man.jpg";
import "../pages/partials/css/cc.css"

function join() {
    return (
        <div className="App">
        <header className="app-header">
          <div>환영합니다.</div>
        </header>
        <div className="app-body">
          <Container  >
            <ul className="card-list" style={{display:'flex', justifyContent:'center'}}>
              <li>
                <Card className="service-card-form service-card" >
                  <Card.Img variant="top" src={manimage} className="image-size"/>
                  <Card.Body  >
                    <Card.Text style={{textAlign:"start"}} >
                    회원가입 하시고 
                    다양한 서비스를 이용하세요.
                    </Card.Text>
                    <Button href='./nomalJoin'>일반 회원가입</Button>
                  </Card.Body>
                </Card>
              </li>
              <li>
                <Card className="service-card-form  service-card">
                  <Card.Img variant="top" src={manimage} className="image-size"/>
                  <Card.Body>
                    <Card.Text>
                    가상화폐 공시를 등록하고
                    블록체인 프로젝트를 등록하세요.
                    </Card.Text>
                    <Button style={{ marginBottom: "25px"}} href='./companyJoin'>기업용 회원가입</Button>
                  </Card.Body>
                </Card>
              </li>
              
            </ul>
          </Container>
        </div>
      </div>



    )
}
export default join;