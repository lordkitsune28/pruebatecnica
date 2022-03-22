import "@testing-library/jest-dom"
import { loginSincrono } from "../../actions/actionLogin"
import { types } from "../../types/types"

describe("Validar acciones de login", () => {
    test("Validar login sincronico", () => {
        const id = "ABC123"
        const displayname = "lordKitsune"

        const loginAction = loginSincrono( id, displayname)
        
        expect(loginAction).toEqual({
            type: types.login,
            payload: {
            id,
            displayname
            }
        })
    })

    test("Cerrar Sesion ", () => {
        const id = "ABC123"
        const displayname = "lordKitsune"

        const logoutAction = logout()

        expect(logoutAction).toEqual({
            type: types.logout
        })
    })
})