import React from 'react';
import shopImg from '../../assets/img/shopImg.png'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        <div className="hero border-top" style={{backgroundColor:"#F8F9FA"}}>
            <Container>
            <Row className='align-items-center'>
                <Col md={6} className=' text-center order-md-1'>
                    <img src={shopImg} alt="" className='img-fluid' />
                </Col>
                <Col md={6} className='text-center'>
                    <h1>Make your Outfit <span style={{ color: "#0B5ED7" }} >wonderful</span> </h1>
                    <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas non dolor tempora omnis, autem laborum in aspernatur perspiciatis eaque commodi.</p>
                <Link className='btn text-light' style={{backgroundColor:"#0B5ED7"}} to='/shop'>shop now</Link>
                </Col>
            </Row>
        </Container>
        </div>
                );
}

export default Hero;
