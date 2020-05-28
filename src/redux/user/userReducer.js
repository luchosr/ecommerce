import { UserActiontypes } from "./userTypes";

const INNITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INNITIAL_STATE, action) => {
  switch (action.type) {
    case UserActiontypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
