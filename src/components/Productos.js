const productos = [
    { id: "1", name: "Remera Boxeador", price: 2599, category: "promociones", description: 'Remera de algodón talle único', image:'../../public/reme_boxeador.webp' },
    { id: "2", name: "Remera Gati Escondido", price: 1999, category: "promociones", description: 'Remera de algodón talle único', image:'../../public/reme_escondido.webp' },
    { id: "3", name: "Remera Gentleman", price: 1799, category: "promociones", description: 'Remera de algodón talle XL' , image:'../../public/reme_gentleman.webp'},
    { id: "4", name: "Gorra Glitter Rosa", price: 999, category: "promociones", description: 'Gorra con orejitas, ¡último color disponible!', image:'../../public/gorra_glitter.webp' },
    { id: "5", name: "Collar Silueta Gatito", price: 1759, category: "varios", description: 'Dije enchapado en plata. Disponible sin cadenita', image:'../../public/collar.webp' },
    { id: "6", name: "AurisBlack", price: 4329, category: "varios", description: 'Auriculares con luz', image:'../../public/auris_black.webp'},
    { id: "7", name: "Set de Lapiceras 'Huellita'", price: 999, category: "varios", description: 'Lapiceras surtidas trazo azul y negro', image:'../../public/lapiceras_pow.webp' },
    { id: "8", name: "Medias", price: 1050, category: "varios", description: "Medias surtidas", image:'../../public/medias.webp'},
    { id: "9", name: "MoussePad", price: 2099, category: "varios", description: 'MoussePads de diferentes diseños!', image:'../../public/moussepad.webp'},
    { id: "10", name: "Reloj Sueño del Árbol", price: 3399, category: "hogarydeco", description: 'Reloj pintado a mano', image:'../../public/reloj_arbol.webp'},
    { id: "11", name: "Reloj Colorido", price: 3399, category: "hogarydeco", description: 'Reloj pintado a mano', image:'../../public/reloj_color.webp'},
    { id: "12", name: "GatiMate", price: 2399, category: "hogarydeco", description: 'Mate de cerámica', image:'../../public/mate_white.webp'},
    { id: "13", name: "Sábanas", price: 2399, category: "hogarydeco", description: 'Sábanas de 1 1/2 plaza de nylon', image:'../../public/sabanas.webp'},
  ];

export const filtroDeProducto = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find((item) => item.id === id)
            if (producto) {
                resolve(producto)
            } else {
                reject('Producto no encontrado')
            }
        }, 1800);
    });
};

export const filtroDeCategoria = (idCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtroCategoria = idCategory ? productos.filter((product) => product.category === idCategory) : productos;

            resolve(filtroCategoria);

        }, 1500);
    });
};