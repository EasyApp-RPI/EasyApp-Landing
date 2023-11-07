import { Container } from 'react-bootstrap';
import Login  from '../Components/Login'
import React, { useState, useEffect } from 'react';
import Fade from 'react-bootstrap/Fade';
import '../index.css'

function LandingPage(){
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
      <div>
        <div className= "justify-content-center row mt-5 h-50" bg='light'>
          <div className='w-50 col d-flex justify-content-center align-items-center'>
            <Container className='px-5'>
              <h1>Help! I need a...</h1>
              <Fade in={visible}>
                <h2>
                {items[index]}
                </h2>
              </Fade>
              <h4>Download EasyApp, an AI powered application  ready to help <strong>YOU</strong> get hired.</h4>
            </Container>
          </div>
          <div className='col'>
              <Login/>
          </div>
        </div>
        <div className='row py-5 text-center'>
          <h2>
            We are committed to helping the job search as easy as possible for you!
          </h2>
          <div className='col'>
            <h4>
              Application Autofill
            </h4>
          </div>
          <div className='col'>
            <h4>
              Automatic Cover-Letter Generation
            </h4>
          </div>
          <div className='col'>
            <h4>
              And More!
            </h4>
          </div>
        </div>
      </div>
    );
  }

export default LandingPage;
