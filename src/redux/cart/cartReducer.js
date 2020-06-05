import CartActionTypes from "./cartTypes";
import { addItemtoCart } from "./cartUtils";

const INNITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemtoCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
