import {useState, useEffect} from 'react'
import { filtroDeProducto } from "../Productos";
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();


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
        <ItemDetail producto={producto} isLoading={isLoading} />
    )
}

export default ItemDetailContainer;