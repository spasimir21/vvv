import React, { useEffect } from 'react';
import './Product.scss';
import { IconUsed } from '../../assets/IconUsed';
import { IconDelete } from '../../assets/IconDelete';
import { useRequest } from '../../hooks/useRequest';
import { removeProduct } from '../../lib/api/product';

function getDayDifference(date) {
  return Math.ceil((date - Date.now()) / (1000 * 3600 * 24));
}

function Product({ isShown, setIsShown, product, onRemove }) {
  const [_, __, sendRemove] = useRequest(removeProduct);

  useEffect(() => {
    if (getDayDifference(product.expirationDate) < 1) {
      sendRemove({ productId: product.id, status: 'thrown' });
      onRemove();
    }
  }, []);

  return (
    <div className='product_wrapper' onClick={() => setIsShown(!isShown)}>
      <div className='product'>
        <div className='image' style={{ backgroundImage: `url('${product.imageUrl}')` }}></div>
        <div className='product_title'>
          <div className='title'>{product.name}</div>
          <div className='price'>{product.price} лв.</div>
        </div>
        <div className='expire_date'>{getDayDifference(product.expirationDate)} days left</div>
      </div>
      <div className={isShown ? 'show' : 'notshown'}>
        <div
          className='used'
          onClick={() => {
            sendRemove({ productId: product.id, status: 'used' });
            onRemove();
          }}>
          <IconUsed className='tick' />
          Use
        </div>
        <div
          className='delete'
          onClick={() => {
            sendRemove({ productId: product.id, status: 'thrown' });
            onRemove();
          }}>
          <IconDelete className='bin' />
          Throw
        </div>
      </div>
    </div>
  );
}

export { Product };
