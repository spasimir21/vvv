import React, { useEffect, useState } from 'react';
import './ProductPage.scss';
// import {Products} from '../../components/Products/Products';
import { Product } from '../../components/Product/Product';
import { Navigation } from '../../components/NavBar/NavBar';
import { useRequest } from '../../hooks/useRequest';
import { getProducts } from '../../lib/api/product';
import { LocalNotifications } from '@capacitor/local-notifications';

const ProductsPage = () => {
  const [productsResult, loading, sendLoadProducts] = useRequest(getProducts);
  const [reloadTrigger, setReloadTrigger] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    sendLoadProducts({}).then(result => {});
  }, []);

  return (
    <>
      <div className='products-page'>
        <div className='products-page-title'>Products</div>
        <div className='products-page-list'>
          {loading || productsResult == null
            ? 'Loading...'
            : !productsResult.success
            ? 'Something went wrong!'
            : productsResult.result.products
                .sort((a, b) => b.expirationDate - a.expirationDate)
                .map((product, index) => (
                  <Product
                    key={index}
                    isShown={selectedIndex == index}
                    setIsShown={() => (selectedIndex == index ? setSelectedIndex(-1) : setSelectedIndex(index))}
                    onRemove={() => {
                      productsResult.result.products.splice(index, 1);
                      setSelectedIndex(-1);
                      setReloadTrigger(!reloadTrigger);
                    }}
                    product={product}></Product>
                ))}
        </div>
      </div>
      <Navigation />
    </>
  );
};

export { ProductsPage };
