import React from "react";
import { connect } from "react-redux";
import CustomButton from "../customButton/CustomButton";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import CartItem from "../cartItem/CartItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { toggleCartHidden } from "../../redux/cart/cartActions";

import "./CartDropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-messaje">Your card is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
