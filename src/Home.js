import React from 'react';
import './Scss/style.scss';
import Navigation from './Navbar';
// import Aframe from './aframe';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HomePageWelcome = () => {
    return (
        <div id='homepage-container' className='section-container'>
           <h1 className='sectionTitle'>Ashley Hart</h1>
           <div></div>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}

export default HomePageWelcome;