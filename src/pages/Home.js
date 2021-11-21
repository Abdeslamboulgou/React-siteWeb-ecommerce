import React from 'react';
import products from '../data'
import ProductCard from '../components/ProductCard';
import '../style/pages/home.css';

function Home() {
    return (
        <div className="products">
             {products.map((product) => (
                 <ProductCard key={product.id} product={product}/>
                 )
                 )}
        </div>
    );
}

export default Home;