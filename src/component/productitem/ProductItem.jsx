import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaDollarSign } from "react-icons/fa6";
import './productItem.css'
import { CartContext } from '../../context/AppContext';

const ProductItem = ({ id, title, price, category, description, image }) => {
    const { addToCartFunction } = useContext(CartContext)
   
    return (
        <Col sm={12} md={6} lg={4}>
            <div className="cardBox ">
                <div className="cardImg">
                    <img src={image} alt="" className='img-fluid' />
                </div>
                <div className="cardBody">
                    <h6 className="cardTitle">
                        {title}
                    </h6>
                    <p className='my-3'>
                        price: {price}
                        <FaDollarSign size='18px' />
                    </p>
                    <div className="cardDesc">
                        <p>
                            {description}
                        </p>
                        <Link to={`/productitem/${id}`}>
                            <small>Read More</small>
                        </Link>
                    </div>
                </div>
                <div className="cardFooter">
                    <button className='btn btn-primary' onClick={()=>addToCartFunction(id)}>
                        add to cart
                    </button>
                </div>
            </div>
        </Col>
    );
}

export default ProductItem;
