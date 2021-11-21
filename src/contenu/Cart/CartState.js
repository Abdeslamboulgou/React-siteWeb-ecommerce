import { useReducer } from "react";
import CartContenu from './CartContenu'
import CartReducer from './CartReducer'
import {SHOW_HIDE_CART , ADD_TO_CART , REMOVE_ITEM} from '../Types'

const CartState =({children}) => {
    const initialState = {
           showCart:false,
           cartItems:[],
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

    return (
          <CartContenu.Provider value={{
              showCart: state.showCart,
              cartItems: state.cartItems,
              addToCart,
              showHideCart,
              removeItem,

          }}>{children}</CartContenu.Provider>
    )
}
export default CartState