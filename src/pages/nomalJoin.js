import React from "react";
import { Image, Button, Container, Form } from "react-bootstrap";

import "../css/pages.css";

const NomalJoin = ({ history }) => {
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: ""
    });

    function handleInputChange(e) {
        e.preventDefault()

        const { value, name } = e.target

        console.log(value, name)

        setUser({
            ...user,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(user))
        fetch("http://192.168.0.33:3001/user/person", {
            mode: 'cors',
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json;charset=utf-8",

            },
            body: JSON.stringify(user)
        })
            .then((resp) => {
                if (resp.status === 200) {
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
                <Image
                    className="cc-carousel-item-image"
                    src={require("../images/VART_.png")}
                    width="300px"
                    alt="First slide"
                    fluid
                    href="/"
                />
                <hr></hr>
            </header>
            <div className="app-body">
                <Container>

                    <Form onSubmit={onSubmit} >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                className="LoginBox"
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
                                className="LoginBox"
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
                                className="LoginBox"
                                type="password"
                                placeholder="Password"
                                onChange={handleInputChange}
                                value={user.password}
                                name="password"
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

export default NomalJoin;