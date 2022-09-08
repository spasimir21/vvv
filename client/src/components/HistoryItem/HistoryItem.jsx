import React from 'react';
import './HistoryItem.scss';
import { IconUsed } from '../../assets/IconUsed';
import { IconDelete } from '../../assets/IconDelete';
import { useRequest } from '../../hooks/useRequest';
import { removeProduct } from '../../lib/api/product';

function getReverseDayDifference(date) {
  return Math.ceil((Date.now() - date) / (1000 * 3600 * 24));
}

function HistoryItem({ isShown, setIsShown, product }) {
  return (
    <div className="product_wrapper">
      <div className="product">
        <div className="image" style={{ backgroundImage: `url('${product.imageUrl}')` }}></div>
        <div className="product_title">
          <div className="title">{product.name}</div>
          <div className="price">{product.price} лв.</div>
        </div>
        <div className="expiration-container">
          <p>{product.status == 'used' ? 'Used' : 'Thrown'}</p>
          <p className="expire_date">{getReverseDayDifference(product.removeDate)} days ago</p>
        </div>
      </div>
    </div>
  );
}

export { HistoryItem };
