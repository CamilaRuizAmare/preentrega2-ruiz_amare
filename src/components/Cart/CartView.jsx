import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';
import ItemCount from "../ItemCount/ItemCount";
import styles from './CartView.module.css';


const CartView = () => {
    const { cart, itemValue, cartValue, addItem, removeItem, clear } = useContext(CartContext);

    return (
        <div className="container">
            <h1 className="text-center m-4">Tu Carrito de Compras</h1>
            {cart.map((item) => (
                <div className="card row mb-2">
                    <div key={item.id} className={`d-flex justify-content-between my-4 ${styles.cardCart} `}>
                        <img className="w-25 object-fit-contain col-4" src={item.imageName} alt={item.title} />
                        <div className="col-8 row">
                            <div className="text-center col-7">
                                <h4>{item.title}</h4>
                                <span>Precio por Unidad: $ {item.price}</span>
                                <p>Cantidad: {item.quantity}</p>
                                <p className="fw-bold">Subtotal: $ {itemValue(item)}</p>
                            </div>
                            <div className="d-flex align-items-center col-5">
                                <ItemCount product={item} addItem={addItem} />
                                <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                                    <i className="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div>
                <p className="text-end m-3 fw-bold">Total: $ {cartValue(cart)}</p>
                <div className="d-flex justify-content-end">
                    <Link to="/cart/checkout">
                        <button className="btn btn-dark me-4">Finalizar Compra</button>
                    </Link>
                    <button className="btn btn-danger" onClick={clear}>
                        <i className="bi bi-trash">Vaciar Carrito</i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartView;