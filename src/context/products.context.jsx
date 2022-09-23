import { createContext, useState, useEffect } from 'react';
import SHOP_DATA from '../shop-data.js';

import { addCollectionAndDocuments } from '../utils/firebase/firebase.utils';

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const categoryMap = await addCollectionAndDocuments(
      'categories',
      SHOP_DATA
    );
    console.log(categoryMap);
  }, []);

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
