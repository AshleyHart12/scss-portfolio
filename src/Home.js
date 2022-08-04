import React from "react";
import "./Scss/style.scss";
// import Aframe from './aframe';
import { Element } from 'react-scroll';
// import Typed from "react-typed";

const HomePageWelcome = () => {
  return (
    <Element id='home' name='home'>
    <div id="homepage-container" className="section-container">
    {/* <Typed
      strings={[
            "I'm a Full Stack Developer",
            "I Love Software Development",
            "I Love All My Subscribers",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        /> */}
      <div>
         <h1 class='sectionTitle'><span class='title-word1 title-word'>Ashley</span><span class='title-word2 title-word'> Hart</span></h1>
      </div>
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
        While not online, I <span><img src='https://denisechandler.com/wp-content/themes/portfolio_oct2021/images/heart2.png' alt='heart that throbs with css animations' id='homePageHeart' /></span> running trails in the high country, friendly
        competition at the CrossFit gym, and camping under the stars in the
        summer
      </span>
      </div>
    </div>
    </Element>
  );
};

export default HomePageWelcome;
