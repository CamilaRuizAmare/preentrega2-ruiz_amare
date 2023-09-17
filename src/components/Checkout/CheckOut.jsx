import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { checkOut, itemsToTkt } from "../functions";
import { serverTimestamp } from "firebase/firestore";

const CheckOut = () => {
    const { cart, itemValue, cartValue, clear } = useContext(CartContext);
    const [tktID, setTktID] = useState(null);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
    });
    const { name, phone, email } = form;

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const checkForm = (name && phone && email);

    const submitForm = () => {
        const tkt = {
            buyer: {
                ...form,
            },
            items: itemsToTkt(cart),
            total: cartValue(cart),
            date: serverTimestamp(),
        };
        checkOut(tkt);
    };

    return (
        <div>
            <h1>Detalle de tu compra</h1>

{/*             {tktID && <h2>Tu compra ha sido realizada con éxito! Tu código de seguimiento es: {tktID} </h2>} */}

            <div>
                {cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>Precio por Unidad: $ {item.price}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Subtotal: $ {itemValue(item)}</p>
                    </div>
                ))}
                <p>Total: $ {cartValue(cart)}</p>
            </div>

            <h2>Cargá tus datos</h2>
            <form>
                <div>
                    <label>Nombre</label>
                    <input type="text" name="name" onChange={handleChange} />
                </div>
                <div>
                    <label>Teléfono</label>
                    <input type="number" name="phone" onChange={handleChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleChange} />
                </div>
                <div>
                <button disabled={!checkForm} type="submit" onClick={submitForm}>Finalizar Compra</button>
            </div>
            </form>
        </div>
    )
};

export default CheckOut;