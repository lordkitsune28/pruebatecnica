import { typesProduct } from "../types/types"


const initialState = {
    product: []
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
      case typesProduct.list:
         return{
             product: [...action.payload]
         }
  
      default:
          return state
  }
}
