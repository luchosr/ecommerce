import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;
  return (
    <div className='cart-item'>
      <h2 className='name'>{name}</h2>
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
