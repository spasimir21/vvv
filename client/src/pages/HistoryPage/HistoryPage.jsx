import { HistoryItem } from '../../components/HistoryItem/HistoryItem';
import { Navigation } from '../../components/NavBar/NavBar';
import { useRequest } from '../../hooks/useRequest';
import React, { useEffect, useState } from 'react';
import { getHistory } from '../../lib/api/product';
import './HistoryPage.scss';

const HistoryPage = () => {
  const [historyResult, loading, sendLoadHistory] = useRequest(getHistory);

  useEffect(() => {
    sendLoadHistory({});
  }, []);

  return (
    <>
      <div className='history-page'>
        <div className='history-page-title'>History</div>
        <div className='history-page-list'>
          {loading || historyResult == null
            ? 'Loading...'
            : !historyResult.success
            ? 'Something went wrong!'
            : historyResult.result.products
                .sort((a, b) => b.removeDate - a.removeDate)
                .map((product, index) => <HistoryItem key={index} product={product}></HistoryItem>)}
        </div>
      </div>
      <Navigation />
    </>
  );
};

export { HistoryPage };
