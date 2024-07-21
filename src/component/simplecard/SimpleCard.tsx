import React from 'react';
import { Col } from 'react-bootstrap';
import './simplecard.css'

const SimpleCard = ({ icon, title, desc }) => {
    return (
        <Col className='p-2'>
            <div className='simpleCard'>
                <span>
                    {icon}
                </span>
                <h6>{title}</h6>
                <p>{desc}</p>
            </div>
        </Col>
    );
}

export default SimpleCard;
