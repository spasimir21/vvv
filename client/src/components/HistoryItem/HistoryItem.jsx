import './HistoryItem.scss';
import React from 'react';

function getReverseDayDifference(date) {
  return Math.ceil((Date.now() - date) / (1000 * 3600 * 24));
}

function HistoryItem({ product }) {
  return (
    <div className='product_wrapper'>
      <div className='product'>
        <div className='image' style={{ backgroundImage: `url('${product.imageUrl}')` }}></div>
        <div className='product_title'>
          <div className='title'>{product.name}</div>
          <div className='price'>{product.price} лв.</div>
        </div>
        <div className='expiration-container'>
          <p>{product.status == 'used' ? 'Used' : 'Thrown'}</p>
          <p className='expire_date'>{getReverseDayDifference(product.removeDate)} days ago</p>
        </div>
      </div>
    </div>
  );
}

export { HistoryItem };
