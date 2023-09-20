

const CheckoutFinish = ({tktID}) => {

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

};

export default CheckoutFinish;