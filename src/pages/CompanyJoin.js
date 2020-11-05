import React from "react";
import { Button, Container, Form } from "react-bootstrap";

import "../App.css";

const CompanyJoin = ({ history }) => {
    const [user, setUser] = React.useState({
        name : "",
        email : "",
        password : "",
        companyNum:""
    });

    function handleInputChange(e) {
        e.preventDefault()
 
        const { value, name } = e.target

        console.log(value, name)

        setUser({
            ...user,
            [name] : value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
            console.log(JSON.stringify(user))
        fetch("http://192.168.0.33:3001/user/company", {
            mode: 'cors',
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json;charset=utf-8",

            },
            body: JSON.stringify(user)
        })
        .then((resp) => {
            console.log(resp.status)
            if(resp.status === 200) {
                alert("회원가입 성공");
                console.log("C")
                history.push('./MainPage')
            } else {
                alert("회원가입 실패");
            }
        
        })
        .catch((error) => {
            console.log(error)
        });
    }
        
    return (
        <div className="App">
            <header className="app-header">
                <h1>회원가입</h1>
                <h2>회원가입 하세요!</h2>
                <hr></hr>
            </header>
            <div className="app-body">
                <Container>
                    <Form onSubmit={onSubmit} >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter name"
                                onChange={handleInputChange}
                                value={user.name}
                                name="name"
                                required
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={handleInputChange}
                                value={user.email}
                                name="email"
                                required
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
                                onChange={handleInputChange}
                                value={user.password}
                                name="password"
                                required
                            />
                        </Form.Group>

                        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Companynum</Form.Label>
                            <Form.Control
                                type="companynum"
                                placeholder="CompanyNum"
                                onChange={handleInputChange}
                                value={user.companyNum}
                                name="companyNum"
                                required
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit"> Submit </Button>
                    </Form>
                </Container>
            </div>
        </div>
    );
};
export default CompanyJoin;