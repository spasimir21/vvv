import { scanBarcode, getProductDetails, Product } from '../lib/barcodeScanner';
import React from 'react';
import { useState } from 'react';
// import './app.scss';

async function scanProduct() {
  const barcode = await scanBarcode();
  if (barcode == null) return null;
  return await getProductDetails(barcode);
}

function ScannerTest() {
  const [product, setProduct] = useState<Product | null>(null);

  return (
    <>
      <button onClick={() => scanProduct().then(product => setProduct(product))}>Scan</button>
      <p>{product ? product.barcode : '?'}</p>
      <p>{product ? product.name : '?'}</p>
      <img src={product ? product.imageSrc : ''} />
    </>
  );
}

export { ScannerTest };
