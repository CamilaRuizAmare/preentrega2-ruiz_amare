import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';
import ItemCount from "../ItemCount/ItemCount";


const CartView = () => {
    const { cart, itemValue, cartValue, addItem, removeItem, clear } = useContext(CartContext);

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {cart.map((item) => (
                    <div key={item.id}>
                        <img className="w-25" src={item.imageName} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>Precio por Unidad: $ {item.price}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <p>Subtotal: $ {itemValue(item)}</p>
                        </div>
                        <ItemCount product={item} addItem={addItem} />
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                            <i className="bi bi-trash"></i>
                         </button>
                         <hr />
                    </div>
                ))}
            </div>
            <div>
                <p>Total: $ {cartValue(cart)}</p>
                <div>
                    <Link to="/cart/checkout">
                        <button className="btn btn-dark">Finalizar Compra</button>
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