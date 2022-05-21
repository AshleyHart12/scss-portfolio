import React from "react";
import "./Scss/style.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Element } from 'react-scroll';
import Localeyz from './images/Localeyz.png';
import Vantage from './images/Vantage.png';

const Projects = () => {
  return (
    <Element id='projects' name='projects'>
    <div id="projects-container" className="section-container">
      <Container>
        <Row>
          <h1 className="sectionTitle">Projects</h1>
        </Row>
        <Row>
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
                  One of the first professional project I worked, I built out the first version of this site utilizing Tailwind, Bootstrap, and Graphql
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
              <img
                className="d-block w-100 carousel-image"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F10%2FPoint-Blank-Background.jpg&f=1&nofb=1"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 class='carousel-text'>Third slide label</h3>
                <p class='carousel-text'>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </div>
    </Element>
  );
};

export default Projects;
