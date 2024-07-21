import React, { useContext } from 'react';
import './cartitem.css'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaDollarSign } from "react-icons/fa6";
import { CartContext } from '../../context/AppContext';

const CartItem = ({ id, title, image, totalPrice, count }) => {
    const { increseItem,removeItem,decreseItem } = useContext(CartContext);
   

    return (
        <div className="cartItem">
            <img src={image} alt="" width="100px" height="100px" />
            <div className="cartItemText">
                <small>{title}</small>
                <p><small>price: {totalPrice}
                    <FaDollarSign />
                </small></p>
            </div>
            <div className="cartItemBtn">
                {
                    count > 1 ? (<button onClick={()=>decreseItem(id)}>-</button>) :
                        (<button onClick={()=>removeItem(id)}>
                            <RiDeleteBin5Line />
                        </button>)
                }
                <span>{count}</span>
                <button onClick={()=>increseItem(id)}>+</button>
            </div>
        </div>
    );
}

export default CartItem;
