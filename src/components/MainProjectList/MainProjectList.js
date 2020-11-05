import React, { useState, useEffect, useMemo  } from "react";
import { Container, Table } from "react-bootstrap";

import MainProjectListItem from "./MainProjectListItem";
import Pagination from '../Pagination'

import "../../App.css";
import "./MainProjectList.css";

/*
  공시 정보 리스트 출력 경로
  공시정보 작성 경로
*/
function ProjectItemScreen() {
  const [users, setUsers] = useState([]);
  const [loc, setLoc] = useState(1);

  const pageLimit = 1;
  const paginationLimite = 2;

  // list length
  const totalLength = useMemo(() => {
    return users.length;
  }, [users]);

  // page length
  const totalPageNum = useMemo(() => {
    return Math.ceil(totalLength / pageLimit);
  }, [totalLength, pageLimit]);

  useEffect(() => {
    fetch("http://192.168.0.33:3001/publicinfo/list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .then((result) => {
        if (result) {
          result.sort((a, b) => {
            return a.Token.name < b.Token.name ? -1 : a.Token.name > b.Token.name ? 1 : 0;
          });
          setUsers(result);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("업로드 에러")
      });
  }, []);

  return (
    <div className="app-body">
      <Container>
        <div>
          <Table responsive="sm">
            <thead className="table-font-title">
              <tr>
                <th>토큰 이름</th>
                <th>토큰 타입</th>
                <th>회사 이름</th>
                <th>회사 설립일</th>
              </tr>
            </thead>
            <tbody>
            {users.slice((loc - 1) * pageLimit, loc * pageLimit).map((company, name) => (
                <MainProjectListItem company={company} key={company.id} />
              ))}
            </tbody>
          </Table>
        </div>
        <Pagination active={loc} last={totalPageNum} paginationLimite={paginationLimite} onClick={(index) => setLoc(index)} />
      </Container>
    </div>
  );
}

export default ProjectItemScreen;
