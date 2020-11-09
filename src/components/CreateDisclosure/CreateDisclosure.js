import React from 'react'
import { Button,  Form, Col, Row } from 'react-bootstrap';

import '../../css/components.css'

function CreateDisclosure({
    // tokenlogo, 
    reportTitle, type, applicableDate, details, token, onChange, onCreate,
}) {
    return (
        <div className="">
            <div className="ccu-body">
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">리포트 제목</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="reportTitle"
                            placeholder="토큰이름"
                            onChange={onChange}
                            value={reportTitle}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '리포트 제목'
                            }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">타입</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="type"
                            placeholder="프로젝트종류"
                            onChange={onChange}
                            value={type}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '프로젝트종류'
                            }}
                        />
                    </Col>
                </Form.Group>
            </div>
            <div className="ccu-body">
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">실행일</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="applicableDate"
                            placeholder="실행일"
                            onChange={onChange}
                            value={applicableDate}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '실행일'
                            }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">디테일 사항</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="details"
                            placeholder="디테일 사항"
                            onChange={onChange}
                            value={details}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '디테일 사항'
                            }}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="">
                    <Form.Label column sm={3} className="ccu-form-label">토큰명</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                            name="token"
                            placeholder="토큰명"
                            onChange={onChange}
                            value={token}
                            className="ccu-form-input"
                            onFocus={(e) => {
                                e.target.placeholder = ''
                            }}
                            onBlur={e => {
                                e.target.placeholder = '토큰명'
                            }}
                        />
                    </Col>
                </Form.Group>
            </div>
            <div>
                <Button className="ccu-form-button" onClick={onCreate} >공시 등록</Button>
            </div>
        </div>
    )
}

export default CreateDisclosure;
