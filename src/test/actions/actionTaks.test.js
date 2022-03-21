import configureStore from "redux-mock-store";
import thunk from "redux-thunk"

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    login: {
        id: "TESTING"
    }
}

let store = mockStore(initState)

describe("pruebas con las acciones taks", ()=>{
    beforeEach(() =>{
        store = mockStore(initState)
    })

    test("crear tareas ", async() =>{
        await store.dispatch(TaksNew ({
            url:"123",
            nombre: "123",
            description: "123"
        }))
        const actions = store.getActions()
    })
})