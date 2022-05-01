import React from 'react';
import './Scss/style.scss';
import Navigation from './Navbar';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Homepage = () => {
    return (
        <>
        {/* Navbar */}
        <Navigation />
        {/* Columns  */}
        <Container>
            <Row>
                {/* Info */}
                <Col xs={12} md={6}>
                <h1>Ashley Hart</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Col>
                {/* Images */}
                <Col xs={12} md={6}>
                    <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fweknowyourdreams.com%2Fimages%2Fbear%2Fbear-11.jpg&f=1&nofb=1' alt='' className='homepage-image' id='img1' />
                    <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhuntingillustrated.com%2Fwp-content%2Fuploads%2F2014%2F03%2FDepositphotos_93855856_xl-2015-1-scaled.jpg&f=1&nofb=1' alt='' className='homepage-image' id='img2' />
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1472673726%2Fbrown-BEAR0816.jpg%3Fitok%3D6J-f1bxO&f=1&nofb=1' alt='' className='homepage-image' id='img3' />
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-i.huffpost.com%2Fgen%2F3304294%2Fimages%2Fo-ALASKA-BEAR-facebook.jpg&f=1&nofb=1' alt='' className='homepage-image' id='img4' />
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fnypost.com%2Fwp-content%2Fuploads%2Fsites%2F2%2F2019%2F08%2Fpolar-bears-alaska.jpg%3Fquality%3D90%26strip%3Dall%26ssl%3D1&f=1&nofb=1' alt='' className='homepage-image' id='img5' />
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shutterbug.com%2Fimages%2Fphoto_post%2F%5Buid%5D%2F20170525_bergholz_6118_0.jpg&f=1&nofb=1' alt='' className='homepage-image' id='img6' />
                </Col>
            </Row>
        </Container>
        <Button id='homepage-bottom-button'>Experience</Button>
        </>
    )
}

export default Homepage;