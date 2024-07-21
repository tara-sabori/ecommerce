import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import { FaBoltLightning } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import './tablist.css'
import firstImg from '../../assets/img/firstImg.png'
import secondImg from '../../assets/img/secondImg.png'

const TabList = () => {
    return (
        <div className='mt-3'>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className='align-items-center'>
                    <Col md={6}>
                        <Nav variant="pills" className="flex-column tabStyle">
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>
                                            <h6>Simple shoping ecosystem</h6>
                                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, hic?</p>
                                        </div>
                                        <div>
                                            <FaBoltLightning />
                                        </div>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>
                                            <h6>Simple shoping ecosystem</h6>
                                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, hic?</p>
                                        </div>
                                        <div>
                                            <FaTelegramPlane />
                                        </div>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col md={6}>
                        <Tab.Content className='text-center'>
                            <Tab.Pane eventKey="first" >
                                <img src={firstImg} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img src={secondImg} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}


export default TabList;
