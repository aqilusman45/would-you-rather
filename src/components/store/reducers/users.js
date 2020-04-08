import { Users } from "../actions/users";

export const users = (state = {}, action) => {
  switch (action.type) {
    case Users.SET_USERS:
      return { ...state, ...action.users };
    default:
      return state;
  }
};
