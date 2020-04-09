import { AuthedUser } from "../actions/authedUser";

export const authedUser = (state = null, action) => {
  switch (action.type) {
    case AuthedUser.AUTHED_USER:
      return { ...action.authedUser };
    case AuthedUser.LOG_OUT:
      return null;
    default:
      return state;
  }
};
