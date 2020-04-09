export class AuthedUser {
  static AUTHED_USER = "AUTHED_USER";
  static LOG_OUT = "LOG_OUT";
  static setAuthedUser = (authedUser) => ({
    type: AuthedUser.AUTHED_USER,
    authedUser: authedUser,
  });

  static logOutUser = () => ({
    type: AuthedUser.LOG_OUT,
    authedUser: null,
  });

  static handleAuthedUserSetup = (authedUser) => {
    return (dispatch) => {
      localStorage.setItem("authedUser", JSON.stringify(authedUser));
      dispatch(AuthedUser.setAuthedUser(authedUser));
    };
  };
}
