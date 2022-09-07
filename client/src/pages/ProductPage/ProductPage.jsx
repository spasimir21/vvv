import * as React from 'react';
import './ProductPage.scss';
// import {Products} from '../../components/Products/Products';
import { Product } from "../../components/Product/Product"

  const ProductsPage = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(-1);
    return (
      <div className="products-page">
        <div className="products-page-title">Products</div>
        <div className="products-page-list">

          {
[...Array(10)].map((elementInArray, index) => ( 
  <Product key={index} isShown={selectedIndex==index}setIsShown={() => selectedIndex == index ? setSelectedIndex(-1) : setSelectedIndex(index)} name="Coca-Cola" image="https://pingo.bg/Content/products/4313/800-800.jpg"></Product>
    ) 
)}
        </div>
     </div>
    );
  }

export { ProductsPage }