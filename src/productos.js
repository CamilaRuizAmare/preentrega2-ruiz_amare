const productos = [{
    id: '1',
    name: 'Lalala',
    description: 'asldjanlsd',
    category: 'Hogar-Deco',
    image: ''
},
{
    id: '2',
    name: 'Lusudhas',
    description: 'asldsadssss',
    category: 'varios',
    image: ''
}];



export const filtroDeProducto = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find((item) => item.id === id)
            if (producto) {
                resolve(producto)
            } else {
                reject('Producto no encontrado')
            }
        }, 1500)
    })
};

export const filtroDeCategoria = (idCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtroCategoria = idCategory ? productos.filter((product) => product.category === idCategory) : productos

            resolve(filtroCategoria);

        }, 2000)
    })
};

export default productos;