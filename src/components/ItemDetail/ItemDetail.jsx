import PropTypes from "prop-types";

const ItemDetail = ({ producto, isLoading }) => {
    if (isLoading) {
        return <h2 className="text-center mt-4">Cargando..</h2>
    };

    if (!producto) {
        return null
    };

    return (
        <div>
            <h1 className="text-center mt-2" >{producto.name}</h1>
            <div className="card m-5">
                <div className="row g-0">
                    <div className="col-3">
                        <img src={producto.image} alt={producto.name} />
                    </div>
                    <div className="col-8">
                        <div className="card-body text-end">
                            <span className="card-title">{producto.name}</span>
                            <p className="card-text">{producto.description}</p>
                            <p className="card-text">${producto.price}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

ItemDetail.propTypes = {
    producto: PropTypes.object,
    isLoading: PropTypes.bool
};

export default ItemDetail;