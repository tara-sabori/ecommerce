import React, { useContext } from 'react';
import { CartContext } from '../../context/AppContext';
import CartItem from '../../component/cartItem/CartItem';
import { Container } from 'react-bootstrap';
import './cart.css'

const Cart = () => {
    const { cartProduct } = useContext(CartContext)
    return (
        <Container>
            <div className="cartContainer">
            {
                cartProduct.length == 0 ? (<p>cart is empty</p>) : (
                    cartProduct.map(product => (
                        <CartItem
                            key={product.id}
                            {...product} />
                    ))
                )
            }
            {
                cartProduct.length > 0 && (<b>
                    total price: {cartProduct.reduce((a,b)=>a+b.totalPrice,0).toFixed(2)} $
                </b>)
            }
            </div>
        </Container>
    );
}

export default Cart;
