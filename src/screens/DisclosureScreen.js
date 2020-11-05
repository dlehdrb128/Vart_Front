import React, { useState, useMemo, useCallback, useRef } from 'react'
//공시 정보 리스트 출력 경로
import BasicInfoList from '../components/BasicInfoList/BasicInfoList'
//공시정보 작성 경로
import CreateCompanyUser from '../components/CreateCompanyUser'
import { Container } from 'react-bootstrap'

function ProjectItemScreen({ history }) {
    const [users, setUsers] = useState([])
    users.sort(function (a, b) {
        return a.Token.name < b.Token.name ? -1 : a.Token.name > b.Token.name ? 1 : 0;
    })

    const fetchUserList = useCallback(() => {

        return fetch('http://192.168.0.33:3001/publicinfo/list', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.status == 200) {
                console.log(res)
                return res.json();
            } else {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
            // alert("업로드 에러")
        });
    }, [])

    React.useEffect(async () => {
        const result = await fetchUserList();
        if (result) {
            setUsers(result);
        }
    }, [])

    return (
        <div className="app-body">
            <Container>
                <BasicInfoList
                    users={users}
                />
            </Container>
        </div>


    )
}

export default ProjectItemScreen;