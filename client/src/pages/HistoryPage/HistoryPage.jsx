import React, { useEffect, useState } from 'react';
import './HistoryPage.scss';
// import {Products} from '../../components/Products/Products';
import { HistoryItem } from '../../components/HistoryItem/HistoryItem';
import { Navigation } from '../../components/NavBar/NavBar';
import { useRequest } from '../../hooks/useRequest';
import { getHistory } from '../../lib/api/product';

const HistoryPage = () => {
  const [productsResult, loading, sendLoadProducts] = useRequest(getHistory);
  const [reloadTrigger, setReloadTrigger] = useState(false);

  useEffect(() => {
    sendLoadProducts({}).then(console.log);
  }, []);

  return (
    <>
      <div className='history-page'>
        <div className='history-page-title'>History</div>
        <div className='history-page-list'>
          {loading || productsResult == null
            ? 'Loading...'
            : !productsResult.success
            ? 'Something went wrong!'
            : productsResult.result.products
                .sort((a, b) => b.removeDate - a.removeDate)
                .map((product, index) => (
                  <HistoryItem key={index} isShown={false} setIsShown={() => {}} product={product}></HistoryItem>
                ))}
        </div>
      </div>
      <Navigation />
    </>
  );
};

export { HistoryPage };
