import React, { useRef } from "react";
import "./Scss/style.scss";
import Form from "react-bootstrap/Form";
import { Container, Button, Row } from "react-bootstrap";
import { Element } from 'react-scroll';
import emailjs from "emailjs-com";

const ContactForm = () => {

  const form = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jwc0ike",
        "template_lfihv3a",
        form.current,
        "fF1jDB4LOgD5Dxqoo"
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (err) => {
          console.log(err.text);
        }
      );
      e.target.reset();
  };
  return (
    <Element id="contact" name="contact">
    <div className="section-container" id="contact-container">
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
              style={{ width: "60px", height: "60px", margin: "10px" }}
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
              style={{ width: "60px", height: "60px", margin: "10px" }}
              alt="link to gituhb profile"
            />
          </a>
        </div>

        <form onSubmit={onSubmit} id="contact-form" ref={form}>
          <Row>
            <label class='form-label'>Name</label>
            <input type="text" name="from_name" />
          </Row>
          <Row>
            <label class='form-label'>Email</label>
            <input type="email" name="from_email" />
          </Row>
          <Row>
            <label class='form-label'>Message</label>
            <textarea name="message" />
          </Row>
          <Row>
           <Button type="submit" value="message" id='form-submit' class='btn btn-primary'>Submit</Button>
          </Row>
        </form>
      </Container>
    </div>
    </Element>
  );
};

export default ContactForm;
