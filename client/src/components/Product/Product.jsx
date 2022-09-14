import { IconDeleteSVG } from '../../assets/svg_react/icons/IconDeleteSVG';
import { IconUsedSVG } from '../../assets/svg_react/icons/IconUsedSVG';
import { removeProduct } from '../../lib/api/product';
import { useRequest } from '../../hooks/useRequest';
import SvgIcon from '@mui/material/SvgIcon';
import React, { useEffect } from 'react';
import './Product.scss';

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
          }}
        >
          <SvgIcon>
            <IconUsedSVG className='tick' />
          </SvgIcon>
          Use
        </div>
        <div
          className='delete'
          onClick={() => {
            sendRemove({ productId: product.id, status: 'thrown' });
            onRemove();
          }}
        >
          <SvgIcon>
            <IconDeleteSVG className='bin' />
          </SvgIcon>
          Throw
        </div>
      </div>
    </div>
  );
}

export { Product };
