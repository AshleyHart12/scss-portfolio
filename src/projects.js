import React from "react";
import "./Scss/style.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Projects = () => {
  return (
    <div id="projects-container" className="section-container">
      <Container>
        <Row>
          <h1 className="sectionTitle">Projects</h1>
        </Row>
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F10%2FPoint-Blank-Background.jpg&f=1&nofb=1"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F10%2FPoint-Blank-Background.jpg&f=1&nofb=1"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F10%2FPoint-Blank-Background.jpg&f=1&nofb=1"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
