import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FaAngleLeft , FaAngleRight} from "react-icons/fa";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
      <Navbar.Brand href="#">Sắp xếp theo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-3">
            <Nav className='NavHover gap-3'>
            <Nav.Link href="#LienQuan">Liên Quan</Nav.Link>
            <Nav.Link href="#MoiNhat">Mới Nhất</Nav.Link>
            <Nav.Link href="#BanChay">Bán Chạy</Nav.Link>
            </Nav>
            <NavDropdown title="Giá" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Tăng Dần</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Giảm Dần</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end ">
          <Navbar.Text>
            <span>1</span>/15 <button><FaAngleLeft/></button><button><FaAngleRight/></button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;