import { typesProduct } from "../types/types"
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "@firebase/firestore";


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