import './ProductDetailsPage.scss';
import React from 'react';
import TextField from '@mui/material/TextField';

function ProductDetailsPage() {
  return (
    <div className='product-details-page'>
      <div className='product-info'>
        <div className='product-image'></div>
        <h2 className='product-name'>Вода Velingrad</h2>
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
        />
        <div className='price-container'>
          <input type='number' step='0.01' placeholder='Price' />
          <p>лв.</p>
        </div>
      </div>
      <div className='product-details-buttons'>
        <div className='add-button'>Add</div>
        <div className='cancel-button'>Cancel</div>
      </div>
    </div>
  );
}

export { ProductDetailsPage };
