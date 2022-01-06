import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TabContent from './TabContent';
import TabProduct from "./TabProduct";

function ProductSuggestion() {
  const dispatch = useDispatch()

  useEffect(() => {
    
  }, [dispatch])

  return (
    <div className="suggest__list mt-4">
      <div style={{ position: 'sticky', top: '0' }}>
        <div >
          <div className="Prod__Suggest"> <h5 className="m-0">Gợi Ý Hôm Nay</h5> </div>
          <TabProduct />
        </div>
      </div>

      <TabContent />
    </div>

  );
}

export default ProductSuggestion;