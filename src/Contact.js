import React from 'react';
import './Scss/style.scss';
import Form from 'react-bootstrap/Form';
import Navigation from './Navbar';
import { Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



const ContactForm = () => {
    return (
        <>
            <Navigation />
                <Container id='contact-form-container'>
                    {/* <h1 id='connect-title'>Let's Connect</h1> */}
                    <div className='contactIcons'>
                       <Link to={{pathname: 'https://www.linkedin.com/in/ashley-m-hart/'}} target='_blank'>
                            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2FlinkedIn%2FlinkedIn_PNG24.png&f=1&nofb=1' 
                             style={{width: '60px', height: '60px'}} 
                             alt='link to linkedin profile'
                             />
                        </Link>
                        <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffindicons.com%2Ffiles%2Ficons%2F2779%2Fsimple_icons%2F2048%2Fgithub_2048_black.png&f=1&nofb=1' 
                        style={{width: '80px', height: '80px'}} 
                        alt='link to gituhb profile'
                         />
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
                            <Form.Control type="email" placeholder="Enter Message" style={{height: '100px'}} />
                        </Form.Group> 
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Container>
                {/* <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long, contain letters and numbers, and
                    must not contain spaces, special characters, or emoji.
                </Form.Text> */}
        </>
    )
}

export default ContactForm;