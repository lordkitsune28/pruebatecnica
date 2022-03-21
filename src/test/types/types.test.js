import "@testing-library/jest-dom"
import { types } from "../../redux/types/types"

describe("verificar types ", ()=> {
    test("should ", () =>{
        expect(types).toEqual({
            login: "login",
            register: "register",
            logout: "logout",

            taksAddNew: "[Taks] New taks",
            taksActive: "[Taks] Active taks",
            taksLoad: "[Taks] Load taks",
            taksUpdate: "[Taks] Update taks",
            taksDelete: "[Taks] Delete taks",
            taksClear: "[Taks] Clear taks",
            taksLogoutClean: "[Taks] Logout taks"
        })
    })
})