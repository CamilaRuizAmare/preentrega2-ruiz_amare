import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import ItemCount from "../ItemCount/ItemCount";
import styles from './ItemDetail.module.css';

const ItemDetail = ({product, isLoading, addItem}) => {
    
    if (isLoading) {
        return <Loading />;
    }

    if (!product) {
        return null
    };

    return (
        <div className="container">
            <h1 className="text-center my-4">{product.title}</h1>
            <div className={`d-flex card p-2 ${styles.cardComplete} `}>
                <div className="d-flex justify-items-center">
                    <div>
                        <img src={`../../${product.imageName}`} className={styles.imageDetail} alt={product.title} />
                    </div>
                    <div className="d-flex row align-content-center">
                        <div className="text-center">
                            <span className={styles.cardTitle}>{product.title}</span>
                            <p className={styles.cardDetail}>{product.description}</p>
                            <p>${product.price}</p>
                        </div>
                        <div className="text-center">
                        <ItemCount product={product} addItem={addItem} />
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