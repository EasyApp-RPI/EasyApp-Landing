import './App.css';
import logo from "./Logo/easyAppDark.png"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';
import Fade from 'react-bootstrap/Fade';


function Center(){
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const items = ['Full-Time Job', 'Part-Time Job', 'Internship', 'Co-op'  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % items.length);
        setVisible(true);
      }, 300);
    }, 2000);

    return () => clearInterval(textInterval);
  }, []);

  return(
  <div className= "justify-content-center row">
    <div className='w-50 mx-5 col'>
      <Container className='px-5'>
        <h1>Help! I need a...</h1>
        <Fade in={visible}>
          <h2>
          {items[index]}
          </h2>
        </Fade>
        <h4>Download EasyApp, an AI powered assistant ready to help <strong>YOU</strong> get hired.</h4>
      </Container>
    </div>
    <div className='col'>
      <h1> Lets Get Started</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="white" type="submit">
        Sign Up
      </Button>
      </Form>
    </div>
  </div>
  );
}

function Header(){
    return(
      <Navbar expand="lg" className="border-black">
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
            <Nav.Link href="https://github.com/EasyApp-RPI/EasyApp">Download</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Autofill Application</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Generate Resumes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      <Button variant='primary me-3' href="#login">Log In</Button>{' '}
      <Button variant='success' href="#login">Sign Up</Button>
      </Container>
    </Navbar>
    );
}

function LandingPage() {
  return(
    <>
      <Header/>
      <Center />
    </>
  );
}
export default LandingPage;
