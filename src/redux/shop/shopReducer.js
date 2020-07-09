import SHOP_DATA from "./shop.data";

import shopActionsTypes from "./shopTypes";
const INNITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionsTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
