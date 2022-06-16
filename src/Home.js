import React from "react";
import "./Scss/style.scss";
// import Aframe from './aframe';
import { Element } from 'react-scroll';
// import { Typewriter } from 'react-typewriting-effect';
// import 'react-typewriting-effect/dist/index.css';

const HomePageWelcome = () => {
  return (
    <Element id='home' name='home'>
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
    </Element>
  );
};

export default HomePageWelcome;
