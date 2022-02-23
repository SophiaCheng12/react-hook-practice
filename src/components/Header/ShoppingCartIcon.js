/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {Icon} from 'semantic-ui-react';

const ShoppingCartIcon = ({cartCount}) => {
  const showCartCount = () => {
    let countText = '';
    if (!cartCount) {
      countText = '0';
    } else if (cartCount > 9) {
      countText = '9+';
    } else {
      countText = `${cartCount}`;
    }

    return (
      <span
        style={{
          padding: 2,
          backgroundColor: 'grey',
          borderRadius: 2,
          color: 'white',
        }}>
        {countText}
      </span>
    );
  };
  return (
    <div>
      <Icon name="cart" size="large" />
      {showCartCount()}
    </div>
  );
};

export default ShoppingCartIcon;
