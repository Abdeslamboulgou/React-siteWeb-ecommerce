import { useReducer } from "react";
import CartContenu from './CartContenu'
import CartReducer from './CartReducer'
import {SHOW_HIDE_CART , ADD_TO_CART , REMOVE_ITEM , REMOVE_CART, PROGRESS_ITEM , LOWER_ITEM} from '../Types'

const CartState =({children}) => {
    const initialState = {
           showCart:false,
           cartItems:[]
    }

    const [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart= item => {
        dispatch({type: ADD_TO_CART , payload: item})
    }

    const showHideCart= () => {
        dispatch({type: SHOW_HIDE_CART})
    }

    const removeItem= id => {
        dispatch({type: REMOVE_ITEM , payload: id})
    }
    const removeCart= () => {
        dispatch({type: REMOVE_CART})
    }
    const progressItem= item => {
        dispatch({type: PROGRESS_ITEM , payload: item})
    }
    const lowerItem= item => {
        dispatch({type: LOWER_ITEM , payload: item})
    }

    return (
          <CartContenu.Provider value={{
              showCart: state.showCart,
              cartItems: state.cartItems,
              addToCart,
              showHideCart,
              removeItem,
              removeCart,
              progressItem,
              lowerItem

          }}>{children}</CartContenu.Provider>
    )
}
export default CartState