import { typesProduct } from "../types/types"


const initialState = {
    product: []
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
      case typesProduct.register:
         return{
             product: [action.payload]
         }
      case typesProduct.list:
          return {
              product: [...action.payload]
          }
      case typesProduct.editar:
         return {
            ...state,
         };
      case typesProduct.delete:
          return {
              products: state.products.filter(est => est.product !== action.payload)
          }
  
      default:
          return state
  }
}
