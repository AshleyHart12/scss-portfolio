import React from "react";
import "./Scss/style.scss";
import { Element } from 'react-scroll';

const Experience = () => {
  return (
    <Element id='experience' name='experience' className='element'>
    <div id="experience-container" className="section-container">
          <h1 className="sectionTitle">Experience</h1>
          <div style={{margin: '50px', height: 'fit-content'}}>
            <h3 class="progress-title">HTML</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "65%", background: "#FCCD22" }}
              >
                <div class="progress-value">65%</div>
              </div>
            </div>
            <h3 class="progress-title">CSS</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "75%", background: "#352C09" }}
              >
                <div class="progress-value">100%</div>
              </div>
            </div>
            <h3 class="progress-title">JAVASCRIPT</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "75%", background: "#F9DBE8" }}
              >
                <div class="progress-value">75%</div>
              </div>
            </div>
            <h3 class="progress-title">BOOTSTRAP</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "30%", background: "#357E9B" }}
              >
                <div class="progress-value">30%</div>
              </div>
            </div>
            <h3 class="progress-title">React</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "55%", background: "#FCCD22" }}
              >
                <div class="progress-value">65%</div>
              </div>
            </div>
            <h3 class="progress-title">Apis</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "75%", background: "#352C09" }}
              >
                <div class="progress-value">100%</div>
              </div>
            </div>
            <h3 class="progress-title">Something Else</h3>
            <div class="progress">
              <div
                class="progress-bar"
                style={{ width: "75%", background: "#F9DBE8" }}
              >
                <div class="progress-value">75%</div>
              </div>
            </div>
            </div>
    </div>
    </Element>
  );
};

export default Experience;
