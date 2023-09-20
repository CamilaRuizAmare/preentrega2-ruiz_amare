import styles from './ItemList.module.css';
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import Loading from '../Loading/Loading';

const ItemList = ({ productos, isLoading }) => {

    return (
        <div>
            {isLoading && <Loading />}

            <h1 className={`text-center my-4 ${styles.titlePage} `}>Nuestros productos</h1>

            <div className="row w-100 d-flex justify-content-center">
                {productos.map((item) => (
                    <div className={`col-3 card d-flex align-content-center ${styles.cards}`} key={item.id}>
                        <span className="badge rounded-pill text-bg-dark mt-2" >{item.categoryID}</span>
                        <Link className={styles.links} to={`/item/${item.id}`}>
                            <img className='w-50 my-1 mt-4 object-fit-fill' src={`../../${item.imageName}`} alt={item.title} />
                            <div className='card-body'>
                                <p className='card-title fs-4 fw-bold'>{item.title}</p>
                                <span className={`card-text ${styles.cardText} `} >{item.description}</span>
                                <p className="card-text fs-5 fw-bold my-1">${item.price}</p>
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