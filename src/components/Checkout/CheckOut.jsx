import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { checkOut, itemsToTkt } from "../functions";
import { serverTimestamp } from "firebase/firestore";
import Loading from "../Loading/Loading";
import { Link } from 'react-router-dom';


const CheckOut = () => {
    const { cart, itemValue, cartValue, clear } = useContext(CartContext);
    const [tktID, setTktID] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
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

    const submitForm = (e) => {
        e.preventDefault();
        const tkt = {
            buyer: {
                ...form,
            },
            items: itemsToTkt(cart),
            total: cartValue(cart),
            date: serverTimestamp(),
        };

        setIsLoading(true);
        checkOut(tkt)
            .then((docRef) => {
                setTktID(docRef.id);
                clear();
                setIsLoading(false);
            });
    };

    return (
        <div className="container">

            {isLoading && <Loading />}

            <h1 className="text-center my-4">Detalle de tu compra</h1>

            {tktID &&
                <div>
                    <h2 className="text-center">¡Muchas gracias por tu compra!</h2>
                    <div className="d-flex row align-items-center">
                        <img src="https://1.bp.blogspot.com/-bX7ipd0Gl8U/WQVAZXvZ6CI/AAAAAAAAeOE/mX9tfYMVddEyufOZN7moUYmoNdmW-RqAQCLcB/s1600/gato.jpg" alt="Gatito" className="w-25 col-3" />
                        <p className="text-center col-9">
                            Tu compra ha sido realizada con éxito! Tu código de seguimiento es: <span className="fw-bold"> {tktID} </span>
                        </p>
                    </div>
                    <div className="d-flex justify-content-end me-4">
                        <Link to={'/'}>
                            <button className="btn btn-dark ">Volver</button>
                        </Link>
                    </div>
                </div>
            }

            {!tktID &&
                <>
                    <div className="my-5">
                        {cart.map((item) => (
                            <div className="d-flex w-75 justify-content-around" key={item.id}>
                                <h4 className="text-center">{item.title}</h4>
                                <p className="text-center">Precio por Unidad: $ {item.price}</p>
                                <p className="text-center">Cantidad: {item.quantity}</p>
                                <p className="text-center">Subtotal: $ {itemValue(item)}</p>

                            </div>

                        ))}
                        <hr />
                        <p className="text-end me-4 fw-bold">Total: $ {cartValue(cart)}</p>
                    </div>

                    <h2 className="text-center">Cargá tus datos</h2>
                    <form className="d-flex row text-center ">
                        <div className="m-2">
                            <label className="form-label me-2">Nombre: </label>
                            <input type="text" name="name" onChange={handleChange} />
                        </div>
                        <div className="m-2">
                            <label className="form-label me-2">Teléfono: </label>
                            <input type="number" name="phone" onChange={handleChange} />
                        </div>
                        <div className="m-2">
                            <label className="form-label me-2">Email: </label>
                            <input type="email" name="email" onChange={handleChange} />
                        </div>
                        <div className="d-flex ms-5 mt-2 justify-content-center">
                            <button disabled={!checkForm} className="btn btn-dark" type="submit" onClick={submitForm}>Finalizar Compra</button>
                        </div>
                    </form>
                </>}
        </div>
    )
};

export default CheckOut;