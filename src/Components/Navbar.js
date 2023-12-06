// Imports
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Logo/easyAppLight.png"
// Imports font awesome for the nice github gif
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

// Function for the navigation bar
function Navigationbar(){
    return(
      <Navbar expand="lg" className="border-bottom border-3">
      <Container>
        <Navbar.Brand>
          {/* Returns logo of EasyApp */}
        <img
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt="EasyApp logo"
            />
        </Navbar.Brand>
        {/* A button looking link with with a github icon inside */}
      <a href="https://github.com/EasyApp-RPI/EasyApp" className="btn btn-primary">
        Get Started
        <FontAwesomeIcon icon={faGithub} beat className='px-2' />
      </a>
      </Container>
    </Navbar>
    );
}

export default Navigationbar;