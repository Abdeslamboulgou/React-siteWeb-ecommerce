import React, { useContext } from 'react';
import CartContenu from '../contenu/Cart/CartContenu';
import '../style/components/productCard.css';
import Score from './Score';
function ProductCard({product}) {
    const {addToCart} = useContext(CartContenu)
    return (
        <div className="productCard_wr">
              <div>
                  <img className="productCard_image" src={product.image}  alt="" />
                  <h4>{product.name}</h4>
                  <div className="productCard_price"><h5>{product.price} € </h5></div>
              </div>
              <div className="productCard_score">
                     <Score value={product.score} text={`${product.numberViews} Views`}/>
              </div>
              <button type='button' className='productCard_button' onClick={() => addToCart(product)} >Add to Cart</button>
        </div>
    );
}

export default ProductCard;