import React from "react";
import "./Scss/style.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
// import Carousel from "react-bootstrap/Carousel";
import { Element } from "react-scroll";
import Localeyz from "./images/Localeyz.png";
import Vantage from "./images/Vantage.png";
import ProjectThree from "./images/projectThreeImage.png";

const Projects = () => {
  return (
    <Element id="projects" name="projects">
      <div id="projects-container" className="section-container">
        <Container>
          <Row>
            <h1 className="sectionTitle">Projects</h1>
          </Row>
          <Row className='justify-content-center'>
          <Card style={{ width: "18rem" }} className='m-2'>
            <Card.Img variant="top" src={Localeyz} className='projectImage'/>
            <Card.Body>
              <Card.Title style={{fontWeight: '900'}}>Localeyz</Card.Title>
              <Card.Text>
              One of the first professional project I worked, I built out the first version of this site utilizing Tailwind, Bootstrap, and Graphql
              </Card.Text>
              <a target="_blank"
              rel="noopener noreferrer"
              href='https://www.localeyz.io/'
              >
              <Button variant="primary" className='projectButton'>Localeyz</Button>
              </a>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className='m-2'>
            <Card.Img variant="top" src={Vantage} className='projectImage' />
            <Card.Body>
              <Card.Title style={{fontWeight: '900'}}>Vantage Ltd.</Card.Title>
              <Card.Text>
              One of the first professional project I worked, I built out the first version of this site utilizing Tailwind, Bootstrap, and Graphql
              </Card.Text>
              {/* <Button variant="primary" className='projectButton'>Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }} className='m-2'>
            <Card.Img variant="top" src={ProjectThree} className='projectImage' />
            <Card.Body>
              <Card.Title style={{fontWeight: '900'}}>Time To Kill</Card.Title>
              <Card.Text>
              The final project of coding bootcamp, this was a group project made with React, Bootstrap, Express, MongoDB, and Passport.js
              </Card.Text>
              <a target="_blank"
              rel="noopener noreferrer"
              href='https://github.com/AshleyHart12/Project-Three-Time-to-Kill'
              >
              <Button variant="primary" className='projectButton'>View on Github</Button>
              </a>
            </Card.Body>
          </Card>
          </Row>
          {/* <Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={Localeyz}
                alt='screenshot of Localeyz.io homepage'
              />
              <Carousel.Caption>
                <h3 class='carousel-text'>Localey.io</h3>
                <p class='carousel-text'>
                  Part of my work with Vantage Ltd, I helped build out components for an app that allowed Water Parl guests to log in, choose playlists for rides, find others in the park, etc. This was built with Angular Bootstrap, and Jquery
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={Vantage}
                alt="Screenshot of element from working at Vantage"
              />

              <Carousel.Caption>
                <h3 class='carousel-text'>Vantage</h3>
                <p class='carousel-text'>Part of my work with Vantage Ltd, I helped build out components for an app that allowed Water Parl guests to log in, choose playlists for rides, find others in the park, etc. This was built with Angular Bootstrap, and Jquery</p>
              </Carousel.Caption>
            </Carousel.Item>
             <Carousel.Item>
             <a href='https://github.com/AshleyHart12/Project-Three-Time-to-Kill' target='_blank' rel='noopener noreferrer'>
              <img
                className="d-block w-100 carousel-image"
                src={ProjectThree}
                alt="Third slide"
              /> 
               </a>
              <Carousel.Caption>
                <h3 class='carousel-text'>Time To Kill</h3>
                <p class='carousel-text'>
                  The final project of coding bootcamp, this was a group project made with React, Bootstrap, Express, MongoDB, and Passport.js
                </p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </Row> */}
        </Container>
      </div>
    </Element>
  );
};

export default Projects;
