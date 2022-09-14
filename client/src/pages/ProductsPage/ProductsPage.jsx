import { Navigation } from '../../components/NavBar/NavBar';
import { Product } from '../../components/Product/Product';
import { getProducts } from '../../lib/api/product';
import { useRequest } from '../../hooks/useRequest';
import React, { useEffect, useState } from 'react';
import { useReload } from '../../hooks/useReload';
import './ProductsPage.scss';

const ProductsPage = () => {
  const [productsResult, loading, sendLoadProducts] = useRequest(getProducts);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const reload = useReload();

  useEffect(() => {
    sendLoadProducts({});
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
                      reload();
                    }}
                    product={product}
                  ></Product>
                ))}
        </div>
      </div>
      <Navigation />
    </>
  );
};

export { ProductsPage };
