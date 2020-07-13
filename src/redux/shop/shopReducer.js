import shopActionsTypes from "./shopTypes";
const INNITIAL_STATE = {
  collections: null,
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
