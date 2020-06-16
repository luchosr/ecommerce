import SHOP_DATA from "./shop.data";

const INNITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
