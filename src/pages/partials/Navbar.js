import React from 'react'
import { Navbar as BSNavbar, Image, Nav, NavDropdown } from 'react-bootstrap';
import '../../App.css';
// import Navbar from 'react-bootstrap/';

function Navbar() {
    const [token, setToken] = React.useState(null);
    

    const watchToken = ()=>{
        console.log("A")
        console.log(localStorage.getItem('user'));    
        setToken(localStorage.getItem('user'))
    }

   
    React.useEffect(()=>{
        window.addEventListener('storage', watchToken);
        watchToken();
        return () => window.removeEventListener('storage', watchToken)
    }, [token])

    return (

        <div>
            {/* <Container> */}
            <BSNavbar collapseOnSelect expand="lg" bg="white" variant="blue">
                <BSNavbar.Brand href="/">
                    <Image
                        className="cc-carousel-item-image"
                        src={require("../../images/VART_.png")}
                        width="80px"
                        alt="First slide"
                        fluid
                        href="/" />
                </BSNavbar.Brand>

                <BSNavbar.Toggle aria-controls="responsive-navbar-nav" />
                <BSNavbar.Collapse id="responsive-navbar-nav" className="App-partials">
                    <Nav className="mr-auto">
                        
                        
                        <NavDropdown title="가상자산" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="../Project">가상자산</NavDropdown.Item>
                            <NavDropdown.Item href="../Newdisclosure">최근 공시</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="../projectItemCreate">공시등록_Test</NavDropdown.Item>
                            <NavDropdown.Item href="../DisclosureCreate">테스트</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="../Service">서비스</Nav.Link>
                        <NavDropdown title="고객센터" id="collasible-nav-dropdown2">
                            <NavDropdown.Item href="../Announcement">공지사항</NavDropdown.Item>
                            <NavDropdown.Item href="../About">소개</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="../Faq">고객센터</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {token===null ? (
                    <Nav>
                        <Nav.Link href="../CompanyLogin">로그인</Nav.Link>
                        <Nav.Link href="../Join">회원가입</Nav.Link>
                    </Nav> ) : (
                    <Nav>
                        <Nav.Link onClick={(e)=>{
                            e.preventDefault();
                            localStorage.removeItem('user')
                            window.location.href='/'
                        }}>로그아웃</Nav.Link>
                    </Nav>)} 
                </BSNavbar.Collapse>
            </BSNavbar>
        </div>
    )
}

export default Navbar;


// 상단메뉴
// 적용링크 예시
// import Partials from './partials/Partials'