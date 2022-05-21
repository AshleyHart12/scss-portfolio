import React from "react";
import "./Scss/style.scss";
import Navigation from "./Navbar";
// import Aframe from './aframe';
import { Container, Row, Col, Button } from "react-bootstrap";

const HomePageWelcome = () => {
  return (
    <div id="homepage-container" className="section-container">
      <h1 className="sectionTitle">Ashley Hart</h1>
      <div></div>
      <div class='home-page-text'>
      <span>Welcome!</span>
      <br/>
      <br/>
      <span>
          I am a Front-End Web Developer who enjoyes diving into the small details of design and styling. I am constantly developing my skills to stay current with the newest technologies, and enjoy implementing these new trends and concepts into my work.
      </span>
      <br/>
      <br/>
      <span>
        While not online, I enjoy running trails in the high country, friendly
        competition at the CrossFit gym, and camping under the stars in the
        summer.
      </span>
      </div>
    </div>
  );
};

export default HomePageWelcome;
