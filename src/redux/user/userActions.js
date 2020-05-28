import { UserActiontypes } from "./userTypes";

export const setCurrentUser = (user) => ({
  type: UserActiontypes.SET_CURRENT_USER,
  payload: user,
});
