const CartWidget = () => {
    return (
        <button className="btn btn-outline-secondary me-4 my-1 position-relative">
            <i className="bi bi-cart3"></i>
            <span className="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-secondary"> 5
                <span className="visually-hidden">Items del carrito</span>
            </span>
        </button>
    );
};

export default CartWidget;