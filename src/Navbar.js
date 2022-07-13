import React, {useState} from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Scss/style.scss';
import {Link} from 'react-scroll';
import ToggleButton from './ToggleButton';


const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
    return (
      <>
        <Navbar expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="home" spy={true} smooth={true} duration={300} onClick={() => setExpanded(false)}>Home</Link>
              <Link to="experience" spy={true} smooth={true} duration={300} onClick={() => setExpanded(false)}>Experience</Link>
              <Link to="projects" spy={true} smooth={true} duration={300} onClick={() => setExpanded(false)}>Projects</Link>
              <Link to="contact" spy={true} smooth={true} duration={300} onClick={() => setExpanded(false)}>Contact</Link>
            </Nav>
          </Navbar.Collapse>
          <ToggleButton />
        </Container>
      </Navbar>
      </>
    )
}

export default Navigation;


