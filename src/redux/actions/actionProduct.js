import { typesProduct } from "../types/types"
import { db } from "../../firebase/firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where} from "@firebase/firestore";

export const editAsyn = (code, producto) => {
    return async (dispatch) => {
        const traerCollection = collection(db, "productos")
        const q = query(traerCollection, where("code", "==", code))
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

export const editSyn = (code, producto) => {
    return {
        type: typesProduct.edit,
        payload: producto
    }
}

export const deleteProduct = (pro) => {
    return async (dispatch) => {

        const estCollection = collection(db, "productos");
        const q = query(estCollection, where("pro", "==", pro))

        const datos = await getDocs(q);
        datos.forEach((docu) => {
            deleteDoc(doc(db, "productos", docu.id));
        })
        dispatch(deleteSincrono(pro));
        dispatch(list())
    }
}

export const deleteSincrono = (pro) => {
    return {
        type: typesProduct.delete,
        payload: pro
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

export const registerCompra = ( price, pro, items, code) => {
    return (dispatch) => {
        const newProduct = {
            items, pro, price, code
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