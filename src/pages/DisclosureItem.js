import React, { useState } from "react";
<<<<<<< HEAD
import { Table,  Container } from 'react-bootstrap';
=======
import "../App.css";
import { Table, Container } from 'react-bootstrap';
>>>>>>> 17595815c66c849a5d07998ce5db4738c9960ce0

import "../css/pages.css";

// react-router-dom에서 전달해주는 prop
const DisclosureItem = ({ match }) => {

    const [disclosure, setDisclosure] = useState({
        reportTitle: "",
        type: "",
        applicableDate: "",
        details: "",
        token: ""
    })

    React.useEffect(() => {
        if (!match.params.no) {
            alert("잘못된 접근입니다.")
        }
        
        fetch(`http://192.168.0.33:3001/disclosure/query/${match.params.no}`, {
            method: 'GET',
        }).then((resp) => {
            return resp.json()
        }).then((disclosure) => {
            setDisclosure(disclosure)
        })
    }, [])

    return (
        <div className="App">
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td colSpan="2">리포트 제목</td>
                        <td colSpan="2"> {disclosure.reportTitle}</td>
                        <td colSpan="2">리포트 타입</td>
                        <td colSpan="2"> {disclosure.type}</td>
                    </tr>
                    <tr>
                        <td>실행일</td>
                        <td>{disclosure.applicableDate}</td>
                        <td>토큰명</td>
                        <td>{disclosure.token}</td>
                    </tr>
                </tbody>
            </Table>
            <Container>
                <tr>
                    <th>디테일 사항</th>
                </tr>
                <tr>{disclosure.details}</tr>

            </Container>
        </div >
    );
};

export default DisclosureItem;
