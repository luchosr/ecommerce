import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';

import CheckoutItem from '../../components/checkout-Item/Checkout-Item.component';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      <h1>Iam the checkout page</h1>
      <div className=''>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return <CheckoutItem key={id} cartItem={cartItem} />;
        })}
      </div>
      <div className='total'>TOTAL: ${}</div>
    </div>
  );
};

export default Checkout;
