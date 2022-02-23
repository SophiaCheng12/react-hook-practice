import React from 'react';
import AuthProvider from './src/components/Context/AuthProvider';
import CartProvider from './src/components/Context/CartProvider';

// import {FavContext, InitContextValue} from './src/components/Fav';
import {FavProvider} from './src/components/Fav';

// eslint-disable-next-line import/prefer-default-export
export default ({element}) => (
  <AuthProvider>
    <FavProvider>
      {/* <FavContext.Provider value={InitContextValue}> */}
      <CartProvider>{element}</CartProvider>
      {/* </FavContext.Provider> */}
    </FavProvider>
  </AuthProvider>
);
