import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { filtroDeCategoria } from '../Productos';
import ItemList from './ItemList'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        
        setIsLoading(true);

        filtroDeCategoria(id)
        .then((resolve) => {
            setProductos(resolve);
            setIsLoading(false);
        })
    }, [id]);

    return (
        <ItemList productos={productos} isLoading={isLoading} />
    );
};

export default ItemListContainer;