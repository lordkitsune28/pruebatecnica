import "@testing-library/jest-dom"
import { loginReducer } from "../../redux/reducers/loginReducer"
import { types } from "../../redux/types/types"

describe("pruebas en LoginReducer", () => {
    test("debe realizar el login", () => {

        const initState = {}
        const action = {
            type: types.login,
            payload: {
                id: "abc",
                displayname: "lordKitsune"
            }
        }
        const state = loginReducer(initState, action)
        expect(state).toEqual({
            id: "abc",
            name: "lordKitsune"
        })
    })

    test("cerrar sesion - logout ", () => {

        const initState = {
            type: types.login,
            payload: {
                id: "abc",
                displayname: "lordKitsune"
            }
        }

        const action = {
            type: types.logout,
        }

        const state = loginReducer(initState, action)
        expect(state).toEqual([])
    })

    test("State por default ", () => {

        const initState = {
            id: "abc",
            displayname: "lordKitsune"
        }

        const action = {
            type: types.hola,
        }

        const state = loginReducer(initState, action)
        expect(state).toEqual([])
    })
})

