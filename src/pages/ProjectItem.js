import React, { useState } from "react";
import { Table, Button, Container } from 'react-bootstrap';

import "../css/pages.css";

// react-router-dom에서 전달해주는 prop
const ProjectItem = ({ match }) => {
  const [company, setCompany] = useState({
    Developerleader: { education: "", experience: "", name: "" },
    Executive: { education: "", experience: "", name: "" },
    Token: { name: "", projecttype: "" },
    establishmentdate: "",
    id: "",
    jurisdiction: "",
    location: "",
    name: ""
  })

  React.useEffect(() => {
    if (!match.params.id) {
      alert("잘못된 접근입니다.")
    }
    fetch(`http://192.168.0.33:3001/publicinfo/query/${match.params.id}`, {
      method: 'GET',
    }).then((resp) => {
      return resp.json()
    }).then((data) => {
      setCompany(data)
    })
  }, [])

  return (
    <div className="App">
      <Container>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td colSpan="2">토큰 이름</td>
              <td colSpan="2"> {company.Token.name}</td>
              <td colSpan="2">프로젝트 종류</td>
              <td colSpan="2"> {company.Token.projecttype}</td>
            </tr>
            <tr>
              <td>회사 이름</td>
              <td>{company.name}</td>
              <td>회사 설립일</td>
              <td>{company.establishmentdate}</td>
              <td>회사 위치</td>
              <td>{company.location}</td>
              <td>회사 법인 관할자</td>
              <td>{company.jurisdiction}</td>
            </tr>
            <tr>
              <td>경영진 이름</td>
              <td>{company.Executive.name}</td>
              <td colSpan="2">경영진 학력</td>
              <td colSpan="2">{company.Executive.education}</td>
              <td>경영진 경력</td>
              <td>{company.Executive.experience}</td>
            </tr>
            <tr>
              <td>개발자 이름</td>
              <td>{company.Developerleader.name}</td>
              <td colSpan="2">개발자 학력</td>
              <td colSpan="2">{company.Developerleader.education}</td>
              <td>개발자 경력</td>
              <td>{company.Developerleader.experience}</td>
            </tr>
          </tbody>
        </Table>
        <Button href={`/disclosurebytokenname/${company.Token.name}`}>공시</Button>
      </Container>
    </div>
  );
};

export default ProjectItem;
