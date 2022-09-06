import * as React from 'react';
import './ProductPage.scss';
import {Products} from '../../components/Products/Products';


  const ProductsPage = () => {
    return (
      <div className="productsPage">
        <p className="productsTitle">Products</p>  
        <div className="products">
            <Products />
            <Products />
            <Products />
            <Products />
        </div>
     </div>
    );
  }

export { ProductsPage }