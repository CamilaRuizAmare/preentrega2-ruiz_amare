import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const CartWidget = () => {

    const {cart} = useContext(CartContext);
    const {cartTotally} = useContext(CartContext);

    return (
        cartTotally(cart) > 0 ? 
        <Link to={'./cart'}>
            <button className="btn btn-outline-secondary me-4 my-1 position-relative">
                <i className="bi bi-cart3"></i>
                <span className="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-secondary"> {cartTotally(cart)}
                    <span className="visually-hidden">Items del carrito</span>
                </span>
            </button> 
        </Link>
        : ""
    );
};

export default CartWidget;