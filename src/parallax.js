import React from 'react';
import './Scss/style.scss';
import Navigation from './Navbar';
import HomePageWelcome from './Home';
import Experience from './experience';
import Projects from './projects';
import ContactForm from './Contact';
// import Aframe from './aframe';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ParallaxPage = () => {
    return (
        <div style={{width: '100vw'}}>
            <Navigation />
            <HomePageWelcome />
            {/* <div className='bgimg-1'>

            </div> */}
            <Experience />
            {/* <div className='bgimg-2'>
                
             </div> */}
             <Projects />
            {/* <div className='bgimg-3'>
                
            </div> */}
            <ContactForm />
        </div>
        
    )
}

export default ParallaxPage;