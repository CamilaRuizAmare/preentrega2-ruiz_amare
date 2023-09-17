import {useState, useEffect, useContext} from 'react';
import { filtroDeProducto } from "../functions";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import CartContext from '../../context/CartContext';

const ItemDetailContainer = () => {
    const [product, setProducto] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    const {addItem} = useContext(CartContext);
    
    useEffect(() => {
        filtroDeProducto(id)
        .then((response) => {
            setProducto(response);
        })
        .catch(() => {
            setProducto(null);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [id]);

    return (
        <ItemDetail product={product} isLoading={isLoading} addItem={addItem} />
    )
}

export default ItemDetailContainer;