import Navigationbar from './Components/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
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
  <div className= "justify-content-center row mt-5 h-50" bg='light'>
    <div className='w-50 col d-flex justify-content-center align-items-center'>
      <Container className='px-5'>
        <h1>Help! I need a...</h1>
        <Fade in={visible}>
          <h2>
          {items[index]}
          </h2>
        </Fade>
        <br></br>
        <h4>Download EasyApp, an AI powered assistant ready to help <strong>YOU</strong> get hired.</h4>
      </Container>
    </div>
    <div className='col'>
      <h2>Get Back Into the Groove</h2>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control className = "w-75" type="email" placeholder="Email Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className = "w-75" type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="success" type="submit">
        Sign In
      </Button>
      </Form>
    </div>
  </div>
  );
}

function App() {
  return(
    <>
      <Navigationbar/>
      <Center/>
    </>
  );
}
export default App;
