import {types} from "../types/types"
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { facebook, google } from "../../firebase/firebaseConfig"

export const loginGoogle = () => {

    return(dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
        .then(({user}) => {
            dispatch(actionLogin(user.uid,user.displayName))
        })
        .catch(e =>{
            console.log(e)
        })
    }
}

export const loginFacebook = () => {

    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, facebook)
            .then(({ user }) => {
                dispatch(actionLogin(user.uid, user.displayName))
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(actionLogin(user.uid, user.displayName)
                )
                alert('inicio sesion de manera satisfactoria')
            })
            .catch(e => {
                console.log('usuario incorrecto')
            })
    }
}

export const actionLogin = (id, displayname) => {
    return {
        type: types.login,
        payload: {
            id,
            displayname
        }
    }
}

export const logout = () => {

    return (dispatch) => {
        const auth = getAuth();
        signOut(auth)
            .then(user => {
                dispatch(logoutSincrono())
            })
            .catch(error => {
                console.log(error);
            })
    }
}


export const logoutSincrono = () => {
    return {
        type: types.logout,
    }
}