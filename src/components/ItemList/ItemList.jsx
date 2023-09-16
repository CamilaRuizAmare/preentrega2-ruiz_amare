import styles from './ItemList.module.css';
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const ItemList = ({ productos, isLoading }) => {
    if (isLoading) {
        return <h2 className="text-center mt-4">Cargando..</h2>
    }

    return (
        <div>
            <h1 className="text-center mt-2">Nuestros productos</h1>

            <div className="row w-100 d-flex justify-content-center">
                {productos.map((item) => (
                    <div className="col-3 m-5 text-center" key={item.id}>
                        <span className="badge rounded-pill text-bg-dark my-1" >{item.category}</span>
                        <Link className={styles.links} to={`/item/${item.id}`}>
                            <img className='w-50' src={item.image} alt={item.name} />
                            <div>
                                <p className='card-title fs-4 fw-bold'>{item.name}</p>
                                <span className="card-text" >{item.description}</span>
                                <p className="card-text fs-4 fw-bold my-1">${item.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

ItemList.propTypes = {
    productos: propTypes.array.isRequired,
    isLoading: propTypes.bool
}

export default ItemList;