import {NavLink} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../Logo/easyAppDark.png"
import Button from 'react-bootstrap/Button';

function Navigationbar(){
    return(
      <Navbar expand="lg" className="border-bottom border-3" variant="light" bg="light">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="EasyApp logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="https://github.com/EasyApp-RPI/EasyApp">Download</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Autofill Application</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Generate Resumes</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      <Button variant='me-3' href="#login">Log In</Button>{' '}
      <Button variant='primary me-3' href="#login">Register</Button>
      </Container>
    </Navbar>
    );
}

export default Navigationbar;