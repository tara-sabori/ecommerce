import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { BiCategoryAlt } from "react-icons/bi";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";
import { CartContext } from '../../context/AppContext';

const ProductPage = () => {
    const id = useParams().id;
    const [item, setItem] = useState({});
    const { addToCartFunction} = useContext(CartContext);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setItem(res.data));
    }, []);


    return (
        <Container>
            <Row className='align-items-center pt-5'>
                <Col md={4} className='text-center mb-3'>
                    <img src={item.image} alt="" className='img-fluid' width='200px' height="200px" />
                </Col>
                <Col md={8}>
                    <h1>
                        {item.title}
                    </h1>
                    <p>
                        <b>description:</b> {item.description}
                    </p>
                    <div className="details">
                        <ul className='list-unstyled d-flex justify-content-between'>
                            <li>
                                <BiCategoryAlt color='purple' size="20" />  {item.category}
                            </li>
                            <li>
                                <IoPricetagsOutline color='purple' size="20" />  {item.price}$
                            </li>
                            <li>
                                <MdStarRate color='purple' size="20" />  { }
                            </li>
                        </ul>
                    </div>
                    <button onClick={()=>addToCartFunction(item.id) }className='btn btn-outline-primary'>add to cart</button>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductPage;
