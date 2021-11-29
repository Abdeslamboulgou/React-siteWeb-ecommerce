import React from 'react';
import {useContext} from 'react';
import CartContenu from '../contenu/Cart/CartContenu';
import CartItem from './CartItem';
import '../style/components/cart.css'

function Carts() {
    const {showCart, cartItems , showHideCart , removeCart} = useContext(CartContenu)
    return (
        <div>
             {showCart && (
                 <div className="cart_wrapper">
                     <div style={{textAlign:'right'}}>
                         <i style={{cursor:'pointer'}} className='fa fa-times-circle' aria-hidden='true' onClick={showHideCart}></i>

                     </div>
                     <div className='cart_contenu'>
                            {cartItems.length === 0 ? (<h4>Cart is Empty</h4>):(
                                <ul type='none'>
                                    {cartItems.map(item =>(
                                        <CartItem key={item.id} item={item}/>
                                    ))}
                                </ul>
                            )}
                     </div>
                     <div className='Cart_total'>
                         <div className='text'>
                            Total Price : 
                         
                         <span style={{marginLeft:5}} className='total'>
                         {cartItems.reduce((amount,item) => item.price + amount,0)} € 
                         </span>
                         <span className='btns'>
                         <span>
                             <button className='clear_cart' onClick={removeCart}>Clear Cart</button>
                        </span>
                        <span>
                             <button className='buy_item'>Buy Now</button>
                        </span>
                        </span>
                         </div>
                     </div>
                 </div>
             )}
        </div>
    );
}

export default Carts;