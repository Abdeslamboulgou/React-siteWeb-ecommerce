import React from 'react';
import { useContext } from 'react/cjs/react.development';
import CartContenu from '../contenu/Cart/CartContenu';
import '../style/components/cartitem.css'

function CartItem({item}) {
    const {removeItem} = useContext(CartContenu)
    return (
        <div>
            <li className='cart_item'>
                  <img src={item.image} alt=''/>
                  <div className='item_name'>
                      {item.name} 
                      </div>
                      <div className='item_price'>
                      {item.price} € 
                      </div> 
                      <div>
                      <button className='add_item' >+</button>
                      <button className='low_item' >-</button>
                      </div>
                      <button className='cart_button' onClick={() => removeItem(item.id)}>Delete</button>
            </li>
        </div>
    );
}

export default CartItem;