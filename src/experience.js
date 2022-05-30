import React from "react";
import "./Scss/style.scss";
import { Element } from 'react-scroll';

const Experience = () => {
  return (
    <Element id='experience' name='experience' className='element'>
    <div id="experience-container" className="section-container">
          <h1 className="sectionTitle">Experience</h1>
          <div style={{margin: '50px', height: 'fit-content'}}>
            <h3 class="progress-title">SCSS</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "40%", background: "#FCCD22" }}
              >
                <div class="progress-value"></div>
              </div>
            </div>
            <h3 class="progress-title">CSS</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "75%", background: "#F9DBE8" }}
              >
                <div class="progress-value"></div>
              </div>
            </div>
            <h3 class="progress-title">JAVASCRIPT</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "65%", background: "#357E9B" }}
              >
                <div class="progress-value"></div>
              </div>
            </div>
            <h3 class="progress-title">BOOTSTRAP</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "65%", background: "#FCCD22" }}
              >
                <div class="progress-value"></div>
              </div>
            </div>
            <h3 class="progress-title">React</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "60%", background: "#F9DBE8" }}
              >
                <div class="progress-value"></div>
              </div>
            </div>
            <h3 class="progress-title">APIS</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "55%", background: "#357E9B" }}
              >
                <div class="progress-value"></div>
              </div>
            </div>
            <h3 class="progress-title">GIT</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "65%", background: "#FCCD22" }}
              >
                <div class="progress-value"></div>
              </div>
            </div>
            </div>
    </div>
    </Element>
  );
};

export default Experience;
