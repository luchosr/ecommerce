import React from "react";
import { connect } from "react-redux";
import CustomButton from "../customButton/CustomButton";
import CartItem from "../cartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
