import './ProductDetailsPage.scss';
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { IconUsed } from '../../assets/IconUsed';
import { IconDelete } from '../../assets/IconDelete';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { getProductDetails } from '../../lib/barcodeScanner';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../lib/api/product';
import { useRequest } from '../../hooks/useRequest';

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

function ProductDetailsPage() {
  const [productDetails, setProductDetails] = useState(null);
  const [expDate, setExpDate] = useState(formatDate(new Date()));
  const [_, __, sendAdd] = useRequest(addProduct);
  const [price, setPrice] = useState(5);
  const { barcode } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails(barcode).then(product => {
      if (product == null) return navigate('/products');
      setProductDetails(product);
    });
  }, []);

  return (
    <div className='product-details-page'>
      {productDetails == null ? (
        'Loading...'
      ) : (
        <>
          <div className='product-info'>
            <div className='product-image' style={{ backgroundImage: `url('${productDetails.imageSrc}')` }}></div>
            <h2 className='product-name'>{productDetails.name}</h2>
          </div>
          <div className='product-input'>
            <TextField
              id='date'
              label='Expiration Date'
              type='date'
              sx={{ width: '80%' }}
              InputLabelProps={{
                shrink: true
              }}
              value={expDate}
              onChange={event => setExpDate(event.target.value)}
              disablePast
              minDate={new Date()}
            />
            <div className='price-container'>
              <input
                type='number'
                step='0.01'
                placeholder='Price'
                value={price}
                onChange={event => setPrice(parseFloat(event.target.value))}
              />
              <p>лв.</p>
            </div>
          </div>
          <div className='product-details-buttons'>
            <div
              className='used'
              onClick={() => {
                if (new Date(expDate).getTime() < Date.now()) return;
                sendAdd({
                  name: productDetails.name,
                  imageUrl: productDetails.imageSrc,
                  expirationDate: new Date(expDate).getTime(),
                  price,
                  barcode
                });
                navigate('/products');
              }}>
              <IconUsed className='tick' />
              Add
            </div>
            <div className='delete' onClick={() => navigate('/products')}>
              <IconDelete className='bin' />
              Close
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export { ProductDetailsPage };
