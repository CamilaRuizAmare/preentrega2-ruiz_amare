import { getFirestore, doc, getDoc, getDocs, collection, query, where, addDoc } from 'firebase/firestore';


export const filtroDeProducto = (id) => {
    return new Promise((resolve, reject) => {
        const infoFirestore = getFirestore();
        const productRef = doc(infoFirestore, 'ItemCollection', id);
        getDoc(productRef)
            .then((doc) => {
                if (doc.exists()) {
                    resolve({
                        id: doc.id,
                        ...doc.data(),
                    });
                }
                else {
                    reject('Item not found');
                }
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const filtroDeCategoria = (categoryID) => {
    return new Promise((resolve) => {
        const infoFirestore = getFirestore();
        const categoryRef = collection(infoFirestore, 'ItemCollection');
        let q;
        if (categoryID) {
            q = query(categoryRef, where('categoryID', '==', categoryID));
        } else {
            q = query(categoryRef);
        };
        getDocs(q)
            .then((querySnapshot) => {
                const filtroCategoria = querySnapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
                resolve(filtroCategoria);
            });
    });
};

export const checkOut = (tkt) => {
    const infoFirestore = getFirestore();
    const ordersCollection = collection(infoFirestore, "tickets");
  
    return addDoc(ordersCollection, tkt);
};

export const itemsToTkt = (cart) => {
    return cart.map((item) => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price: item.price,
    }))
}