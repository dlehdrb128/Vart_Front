import React from "react";
import { Image, Button, Container, Form } from "react-bootstrap";

import "../App.css";

const CompanyLogin = ({ history }) => {
  const [userEmail, setUserEmail] = React.useState("");
  const [pwd, setUserPwd] = React.useState("");

  const sumbitLogin = React.useCallback((userEmail, pwd) => {
    const data = {
      email: userEmail,
      password: pwd,
    };
    console.log(JSON.stringify(data));
    fetch("http://192.168.0.33:3001/user/login", {
      mode: 'cors',
      method: "POST",
      body: JSON.stringify(data),
      credentials: "include",
      headers: {
        "Content-Type": "application/json;charset=utf-8",

      },
    })
      .then((resp) => {
        console.log(resp.headers);
        console.log(resp);
        return resp.json();

      })
      .then((data) => {
        console.log(data)

        if (!data.token) {
          alert(data.message)
          history.push('/CompanyLogin')
        } else {
          localStorage.setItem("user", data.token)
          window.location.href = '/'
        }
      })
      .catch((error) => {
        alert("로그인 실패");
      });
  }, []);

  return (
    <div className="App">
      {/* <button onClick={e => sample()} >sample</button> */}
      <header className="app-header">
        <Image
          className="cc-carousel-item-image"
          src={require("../images/VART_.png")}
          width="300px"
          alt="First slide"
          fluid
          href="/"
        />
        <h1>Login</h1>
        <h2>로그인하세요!</h2>
        <hr></hr>
      </header>
      <div className="app-body">
        <Container>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
                value={userEmail}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setUserPwd(e.target.value);
                }}
                value={pwd}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
            </Form.Group>
            <Button
              variant="primary"
              href="#none"
              onClick={(e) => {
                e.preventDefault();
                sumbitLogin(userEmail, pwd);
              }}
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default CompanyLogin;
