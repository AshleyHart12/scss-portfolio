import React from "react";
import "./Scss/style.scss";
import Form from "react-bootstrap/Form";
import { Container, Button, Row } from "react-bootstrap";
import { Element } from 'react-scroll';

const ContactForm = () => {
  return (
    <Element id='contact' name='contact'>
    <div className="section-container" id='contact-container'>
      <Container id="contact-form-container">
        <Row>
          <h1 className="sectionTitle">Contact</h1>
        </Row>
        <div className="contactIcons">
          <a
            href="https://www.linkedin.com/in/ashley-m-hart/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2FlinkedIn%2FlinkedIn_PNG24.png&f=1&nofb=1"
              style={{ width: "60px", height: "60px" }}
              alt="link to linkedin profile"
            />
          </a>
          <a
            href="https://github.com/AshleyHart12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fdownload%2Fwhite%2Fgithub-10-256.png&f=1&nofb=1"
              style={{ width: "80px", height: "80px" }}
              alt="link to gituhb profile"
            />
          </a>
        </div>
        <Form>
          {/* NAME */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>
          {/* EMAIL */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          {/* MESSAGE */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Message"
              style={{ height: "100px" }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
    </Element>
  );
};

export default ContactForm;
