import {NavLink} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../Logo/easyAppDark.png"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Navigationbar(){
    return(
      <Navbar expand="lg" className="border-bottom border-3">
      <Container>
        <Navbar.Brand>
        <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="EasyApp logo"
            />
        </Navbar.Brand>
      <a href="https://github.com/EasyApp-RPI/EasyApp" className="btn btn-primary">
        Get Started
        <FontAwesomeIcon icon={faGithub} beat className='px-2' />
      </a>
      </Container>
    </Navbar>
    );
}

export default Navigationbar;