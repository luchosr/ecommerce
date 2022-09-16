// import React from "react";
// import { connect } from "react-redux";
// import CustomButton from "../customButton/CustomButton";
// import { createStructuredSelector } from "reselect";
// import { withRouter } from "react-router-dom";
// import CartItem from "../cartItem/CartItem";
// import { selectCartItems } from "../../redux/cart/cartSelectors";
// import { toggleCartHidden } from "../../redux/cart/cartActions";

import Button from '../button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

// const CartDropdown = ({ cartItems, history, dispatch }) => (
//   <div className="cart-dropdown">
//     <div className="cart-items">
//       {cartItems.length ? (
//         cartItems.map((cartItem) => (
//           <CartItem key={cartItem.id} item={cartItem} />
//         ))
//       ) : (
//         <span className="empty-messaje">Your card is empty</span>
//       )}
//     </div>
//     <Button
//     >
//       GO TO CHECKOUT
//     </Button>
//   </div>
// );

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
// });

// export default withRouter(connect(mapStateToProps)(CartDropdown));
