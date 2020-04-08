import { AuthedUser } from "../actions/authedUser";

export const authedUser = (state = null, action) => {
  switch (action.type) {
    case AuthedUser.AUTHED_USER:
      return { ...state, ...action.authedUser };
    default:
      return state;
  }
};
