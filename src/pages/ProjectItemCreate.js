import React, { useState, useCallback } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

import "../App.css";

const ProjectItemCreate = ({ history }) => {
    const [profile, setProfile] = useState({
        name: "",
        establishmentDate: "",
        location: "",
        jurisdiction: "",
    });
    const [token, setToken] = useState({
        name: "",
        projectType: ""
    })
    const [executive, setExecutive] = useState({
        name: "",
        education: "",
        experience: "",
    })
    const [developerleader, setDeveloperleader] = useState({
        name: "",
        education: "",
        experience: "",
    })

    const onChangeProfile = (e) => {
        const { value, name } = e.target;

        console.log(value, name)

        setProfile({
            ...profile,
            [name]: value,
        });
    }
    const onChangeToken = (e) => {
        const { value, name } = e.target;

        console.log(value, name)

        setToken({
            ...token,
            [name]: value,
        });
    }
    const onChangeExecutive = (e) => {
        const { value, name } = e.target;

        console.log(value, name)

        setExecutive({
            ...executive,
            [name]: value,
        });
    }
    const onChangeDeveloperleader = (e) => {
        const { value, name } = e.target;

        console.log(value, name)

        setDeveloperleader({
            ...developerleader,
            [name]: value,
        });
    }

    //useCallback 함수를 지우고 쓰는 기능(※[비권장]해당하는 방법은 메모리를 지우고 다시 쓰는 방식으로 진행되서 메모리 효율이 좋은 편이 아님)
    const onCreate = useCallback((e) => {
        const _token = localStorage.getItem('user')

        e.preventDefault();

        const request = {
            name: profile.name,
            establishmentDate: profile.establishmentDate,
            location: profile.location,
            jurisdiction: profile.jurisdiction,
            token: {
                name: token.name,
                projectType: token.projectType
            },
            executive: {
                name: executive.name,
                education: executive.education,
                experience: executive.experience
            },
            developerleader: {
                name: developerleader.name,
                education: developerleader.education,
                experience: developerleader.experience
            }
        }

        fetch("http://192.168.0.33:3001/publicinfo/invoke", {
            mode: "cors",
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${_token}`
            },
            body: JSON.stringify(request),
        })
            .then((res) => {
                if (res.status === 200) {
                    alert("업로드 성공");
                    history.push("./Project");
                }

                if (res.status === 401) {
                    alert("업로드 실패");
                    history.push("./ProjectItemCreate");
                }
            })
            .catch((err) => {
                console.log(err);
                alert("업로드 에러");

            });
    });

    return (
        <Container style={{ marginRight: "450px" }}>
            <div>
                <Form.Group as={Row} controlId="" className="ccu-body-title">
                    <Form.Label column sm={3} style={{ marginTop: "80px" }}>토큰 정보</Form.Label>
                    <Col sm={9}>
                        <Form.Text>

                        </Form.Text>
                    </Col>
                </Form.Group>
            </div>
            <div className="app-body">

                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">토큰이름</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="name"
                            placeholder="토큰이름"
                            onChange={onChangeToken}
                            value={token.name}
                            className="ccu-form-input"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">프로젝트종류</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="projectType"
                            placeholder="프로젝트종류"
                            onChange={onChangeToken}
                            value={token.projectType}
                            className="ccu-form-input"
                        />
                    </Col>
                </Form.Group>
            </div>

            <div>
                <Form.Group as={Row} controlId="" className="ccu-body-title">
                    <Form.Label column sm={3} className="">회사정보</Form.Label>
                    <Col sm={9}>
                        <Form.Text>

                        </Form.Text>
                    </Col>
                </Form.Group>
            </div>
            <div className="app-body">
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">회사이름</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="name"
                            placeholder="회사이름"
                            onChange={onChangeProfile}
                            value={profile.name}
                            className="ccu-form-input"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">회사설립일</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="establishmentDate"
                            placeholder="회사설립일"
                            onChange={onChangeProfile}
                            value={profile.establishmentDate}
                            className="ccu-form-input"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">회사위치</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="location"
                            placeholder="회사위치"
                            onChange={onChangeProfile}
                            value={profile.location}
                            className="ccu-form-input"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">법인 관할자 위치</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="jurisdiction"
                            placeholder="법인 관할자(Corporate jurisdiction) 위치"
                            onChange={onChangeProfile}
                            value={profile.jurisdiction}
                            className="ccu-form-input"
                        />
                    </Col>
                </Form.Group>
            </div>

            <div>
                <Form.Group as={Row} controlId="" className="ccu-body-title">
                    <Form.Label column sm={3} className="">경영진</Form.Label>
                    <Col sm={9}>
                        <Form.Text>

                        </Form.Text>
                    </Col>
                </Form.Group>
            </div>
            <div className="app-body">
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">경영진이름</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="name"
                            placeholder="경영진이름"
                            onChange={onChangeExecutive}
                            value={executive.name}
                            className="ccu-form-input"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">경영진학력</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="education"
                            placeholder="경영진학력"
                            onChange={onChangeExecutive}
                            value={executive.education}
                            className="ccu-form-input"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">경영진경력</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="experience"
                            placeholder="경영진경력"
                            onChange={onChangeExecutive}
                            value={executive.experience}
                            className="ccu-form-input"
                        />
                    </Col>
                </Form.Group>
            </div>

            <div>
                <Form.Group as={Row} controlId="" className="ccu-body-title">
                    <Form.Label column sm={3} className="">개발자리더</Form.Label>
                    <Col sm={9}>
                        <Form.Text>

                        </Form.Text>
                    </Col>
                </Form.Group>
            </div>
            <div className="app-body">
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">개발자이름</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="name"
                            placeholder="개발자이름"
                            onChange={onChangeDeveloperleader}
                            value={developerleader.name}
                            className="ccu-form-input"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">개발자학력</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="education"
                            placeholder="개발자학력"
                            onChange={onChangeDeveloperleader}
                            value={developerleader.education}
                            className="ccu-form-input"
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">개발자경력</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="experience"
                            placeholder="개발자경력"
                            onChange={onChangeDeveloperleader}
                            value={developerleader.experience}
                            className="ccu-form-input"
                        />
                    </Col>
                </Form.Group>
            </div>
            <div>
                <Button className="ccu-form-button" style={{ marginLeft: "580px" }} onClick={onCreate} >공시 정보 등록</Button>
            </div>
        </Container>
    )
};

export default ProjectItemCreate;
