import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Scss/style.scss';
import {Link} from 'react-scroll';


const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link to="home" spy={true} smooth={true} duration={300}>Home</Link>
              <Link to="experience" spy={true} smooth={true} duration={300}>Experience</Link>
              <Link to="projects" spy={true} smooth={true} duration={300}>Projects</Link>
              <Link to="contact" spy={true} smooth={true} duration={300}>Contact</Link>
              {/* <Nav.Link href="./experience">Experience</Nav.Link> */}
              {/* <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#link">About Me</Nav.Link>
              <Nav.Link href="./Contact">Contact</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation;


