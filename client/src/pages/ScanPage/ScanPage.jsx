import { scanBarcode } from '../../lib/barcodeScanner';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import './ScanPage.scss';

function ScanPage() {
  const navigate = useNavigate();

  useEffect(() => {
    scanBarcode().then(barcode => setTimeout(() => navigate(`/add/${barcode}`), 0));
  }, []);

  return (
    <div className='scan-page'>
      <div className='scan-camera-container'>
        <h2>Scan Product</h2>
        <div className='scan-box'></div>
      </div>

      <div className='scan-description-container'>
        <p>Scan your product here and add it to your list</p>
      </div>
    </div>
  );
}

export { ScanPage };
