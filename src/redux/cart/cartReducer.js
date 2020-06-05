import CartActionTypes from "./cartTypes";

const INNITIAL_STATE = {
  hidden: true,
};

const cartReducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
