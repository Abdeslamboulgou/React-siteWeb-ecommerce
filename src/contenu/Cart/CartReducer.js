import {SHOW_HIDE_CART , ADD_TO_CART , REMOVE_ITEM , REMOVE_CART, PROGRESS_ITEM , LOWER_ITEM} from '../Types'


const CartReducer = (state  , action) => {
    const initialState = {
        showCart:false,
        cartItems:[]
 }
    switch (action.type) {
        case SHOW_HIDE_CART:{
              return { 
                  ...state,
                  showCart: !state.showCart 
                }
              }
        case ADD_TO_CART :{
            return {
                ...state,
                cartItems:[...state.cartItems, action.payload]
            }
        }
        case REMOVE_ITEM :{
                return {
                    ...state,
                    cartItems:state.cartItems.filter(item => item.id !== action.payload)
                }
            }
        case REMOVE_CART :{
                return {...initialState};
        }
        case PROGRESS_ITEM :{
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item.id === action.payload),
                    qty:state.cartItems.map(item => item.qty + 1)

                }
            }
        case LOWER_ITEM :{
            return {
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.payload),
                qty:state.cartItems.map(item => item.qty - 1)

            }
            }
        default:
          return state;
      }
    }

export default CartReducer