import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#012F73" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,208C480,203,600,149,720,154.7C840,160,960,224,1080,250.7C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            <div style={{ backgroundColor: "#012F73", color: "white" }}>
                <Container>
                    <Row xs={1} md={3}>
                        <Col>
                            <h5 className='text-warning'>Products</h5>
                            <ul className='list-unstyled'>
                                <li>Web Stadio</li>
                                <li>DynamicBox</li>
                                <li>Programming</li>
                                <li>Integrations</li>
                                <li>Command-line</li>
                            </ul>
                        </Col>
                        <Col>
                            <h5 className='text-warning'>Resources</h5>
                            <ul className='list-unstyled'>
                                <li>Documentation</li>
                                <li>Tutorials & Guides</li>
                                <li>Blog</li>
                                <li>Support Center</li>
                                <li>Partners</li>
                            </ul>
                        </Col>
                        <Col>
                            <h5 className='text-warning'>Company</h5>
                            <ul className='list-unstyled'>
                                <li>Pricing</li>
                                <li>Company Values</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
}

export default Footer;
