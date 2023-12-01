import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Fade from 'react-bootstrap/Fade';
import gif from '../Logo/EasyAppGif.gif'
import qr from '../Logo/EasyAPPQR.png'


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
      <div className='.bg-light'>
        <div className= "justify-content-center row mt-5 h-50" bg='light'>
          <div className='w-50 col d-flex justify-content-center align-items-center text-center'>
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
          <div className='col d-flex justify-content-center align-items-center text-center'>
              <div>
                <h3>Check out our GitHub</h3>
                <img src={qr} alt="loading..." className= 'w-50 '/>
              </div>
          </div>
          <div className='col'>
              <img src={gif} alt="loading..." className='h-80 w-75' />
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
            <p>
              Tired of filling out the same questions on every job interview?? <br>
              </br>Our extension will autofill your information into job applications, leaving you more time 
              to prep for interviews and do more OAs!
            </p>
          </div>
          <div className='col'>
            <h4>
              Automatic Cover-Letter Generation
            </h4>
            <p>
              For every application, we will have AI generate a custom cover letter based on the 
              job description and your experiences. No more spending your precious time finding the 
              address and editing your cover letter.
            </p>
          </div>
          <div className='col'>
            <h4>
              And More!
            </h4>
            <p>
              We are constantly working, and plan to add:
              <ul>
                <li>
                  Job Tracking
                </li>
                <li>
                  Resume Generation
                </li>
                <li>
                  Interview Helping
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    );
  }

export default LandingPage;
