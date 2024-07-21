import React, { createContext, useState } from 'react';
import UseLocalStorage from '../hooks/useLocalStorage';

export const CartContext = createContext();

const AppContext = ({ children }) => {
    const [data, setData] = useState([]);;
    const [cartProduct, setCartProduct] = UseLocalStorage('myData',[]);

    const addToCartFunction = (id) => {
        if (existData(id)) {
            const item = [...cartProduct];
            item.map(product => {
                if (product.id == id) {
                    product.count += 1;
                    product.totalPrice = (product.count * product.price).toFixed(2);
                }
                setCartProduct(item);
                return
            })

        } else {
            const item = data.find(product => product.id == id);
            item.count = 1;
            item.totalPrice = item.count * item.price;
            setCartProduct(prev => [...prev, item]);
        }
        console.log(cartProduct);
    }


    const existData = (id) => {
        return cartProduct.some(item => item.id == id);
    }

    const decreseItem = (id) => {
        const item = [...cartProduct];
        item.map(product => {
            if (product.id == id)
                product.count -= 1;
            product.totalPrice = product.price * product.count;
        })
        setCartProduct(item);
    }

    const removeItem=(id)=>{
        const item = cartProduct.filter(product => product.id != id)
        setCartProduct(item)
    }

    const increseItem=(id)=>{
        const item = [...cartProduct];
        item.map(product => {
            if (product.id == id)
                product.count += 1;
            product.totalPrice = product.price * product.count;
        })
        setCartProduct(item);
    }

    return (
        <CartContext.Provider value={{ data, setData, cartProduct,addToCartFunction,decreseItem,removeItem,increseItem}}>
            {children}
        </CartContext.Provider>
    );

}
export default AppContext;
