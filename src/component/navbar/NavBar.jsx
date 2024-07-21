import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navbar.css'
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from '../../context/AppContext';

const NavBar = () => {
    const { cartProduct } = useContext(CartContext);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">E-commerce</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto order-1' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='mx-5' to='/'>Home</NavLink>
                        <NavLink className='mx-5' to='/shop'>shop</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <div className='cartBtn'>
                    <NavLink to='/cart' className='btn btn-primary '>
                        <FaCartPlus size='25px' />
                        {
                            cartProduct.length > 0 && (<span className="badge bg-danger rounded-circle">{cartProduct.length}</span>)
                        }
                    </NavLink>
                </div>
            </Container>
        </Navbar>
    );
}

export default NavBar;
