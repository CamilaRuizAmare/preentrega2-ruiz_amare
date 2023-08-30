import { Link } from "react-router-dom";
import propTypes from "prop-types";

const ItemList = ({ productos, isLoading }) => {
    if (isLoading) {
        return <h2 className="text-center mt-4">Cargando..</h2>
    }

    return (
        <div>
            <h1 className="text-center mt-2">Nuestros productos</h1>

            <div className="row d-flex justify-content-center">
                {productos.map((item) => (
                    <div className="card col-3 m-5 p-2 text-center" key={item.id}>
                    <span className="badge rounded-pill text-bg-dark mb-1" >{item.category}</span>
                        <Link to={`/item/${item.id}`}>
                            <img className="card-img-top w-75" src={item.image} alt={item.name} />
                            <div className="card-body">
                                <span className="card-title">{item.name} </span>
                                <p className="card-text" >{item.description}</p>
                                <p className="card-text">${item.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

ItemList.propTypes = {
    productos: propTypes.array.isRequired,
    isLoading: propTypes.bool
}

export default ItemList;