import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({product, isLoading, addItem}) => {
    if (!product) {
        return null
    };

    return (
        <div>
            {isLoading && <Loading />}

            <h1 className="text-center mt-2" >{product.title}</h1>
            <div className="card m-5">
                <div className="row g-0">
                    <div className="col-3">
                        <img src={`../../${product.imageName}`} alt={product.title} />
                    </div>
                    <div className="col-8">
                        <div className="card-body text-end">
                            <span className="card-title">{product.title}</span>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">${product.price}</p>
                        </div>
                        <ItemCount product={product} addItem={addItem} />
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