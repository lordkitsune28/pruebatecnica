import { typesProduct } from "../types/types"
import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where} from "@firebase/firestore";

export const deleteProduct = (product) => {
    return async (dispatch) => {

        const estCollection = collection(db, "productos");
        const q = query(estCollection, where("product", "==", product))

        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db, "productos", docu.id));
        })
        dispatch(deleteSincrono(product));
    }
}

export const deleteSincrono = (product) => {
    return {
        type: typesProduct.delete,
        payload: product
    }
}

export const registerCompra = (product, items, price) => {
    return (dispatch) => {
        const newProduct = {
            product, items, price
        }
        addDoc(collection(db, "productos"), newProduct)
        .then(resp => {
            dispatch(registroProductsincrono(newProduct))
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const registroProductsincrono = (producto) => {
    return {
        type: typesProduct.agregar,
        payload: producto
    }

}

export const listProducts = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "productos"));
        console.log(querySnapshot)
        const producto = [];
        querySnapshot.forEach((doc) => {
            producto.push({
                ...doc.data()
            })
        });
        dispatch(list(producto));
    }
}

export const list = (productos) => {
    return {
        type: typesProduct.list,
        payload: productos
    }
}

export const editAsyn = (product, producto) => {
    return async (dispatch) => {
        const traerCollection = collection(db, "productos")
        const q = query(traerCollection, where("producto", "==", producto))
        const datosQ = await getDocs(q)
        let id
        datosQ.forEach(async (docu) => {
            id = docu.id
        })
        console.log(id)

        const docRef = doc(db, "productos", id)
        await updateDoc(docRef, producto)
            .then(() => list())
    }
}

export const editSyn = (product, producto) => {
    return {
        type: typesProduct.edit,
        payload: producto
    }
}
