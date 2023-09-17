import { useState } from 'react';
import CartContext from './CartContext';

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        const checkItem = cart.find((product) => product.id === id);
        return checkItem ? true : false;
    }

    const addItem = (product, quantity) => {

        const productInCart = isInCart(product.id);
        if (productInCart) {
            const itemToCart = cart.map((product) => {
                if (product.id === product.id) {
                    return {
                        ...product,
                        quantity: product.quantity + quantity,
                    };
                };
                return product;
            });
            setCart(itemToCart);
        }
        else {
            setCart([
                ...cart, { ...product, quantity}
            ]);
        };
    };

    const removeItem = (id) => {
        const itemToCart = cart.filter((product) => product.id !== id);
            return setCart(itemToCart);
    };

    const clear = () => {
        setCart([]);
    };

    const cartTotally = (cart) => {
        return cart.reduce((acc, product) => acc + product.quantity, 0);
    };

    const itemValue = (item) => {
        return item.price * item.quantity;
    }

    const cartValue = (cart) => {
        return cart.reduce((acc, product) => acc + product.quantity * product.price, 0);
    }
   /*  const mapCart = (cart) => {
        return cart.map((item) => ({
                id: item.id,
                name: item.title,
                price: item.price,
                quantity: item.quantity,
                value: itemValue(item),
            }));
    };  */

    return (
        <CartContext.Provider value={{
            cart,
            isInCart,
            addItem,
            removeItem,
            clear, 
            cartTotally, 
            itemValue,
            cartValue,
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;