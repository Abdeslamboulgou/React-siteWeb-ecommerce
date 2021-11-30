import React, { useContext } from 'react';
import CartContenu from '../contenu/Cart/CartContenu';
import '../style/pages/nav.css';


function Nav() {
    const { cartItems, showHideCart } = useContext(CartContenu)
    return (
        <nav >
            {/*<div className="nav_tazlmat">Store</div>*/}
            <div className="nav_tazlmat">
                <div className="home">Home</div>
                <div className="contact">Contact</div>
                <div className="products">Products</div>
            </div>
            <div className="nav_amass">
                <div className="input_wrapper" >
                    <input placeholder="search..." type="text"></input>
                    <i className="fas fa-search" />
                </div>
            </div>
            <div className="nav_tayfast">
                <div className="icon">
                    <i className="fa fa-shopping-cart" aria-hidden='true' onClick={showHideCart} />
                    {cartItems.length > 0 && (
                        <div className='item_count'>
                            <span>{cartItems.length}</span>
                        </div>)}
                </div>
            </div>
        </nav>
    );
}

export default Nav;