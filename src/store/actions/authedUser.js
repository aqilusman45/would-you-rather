export class AuthedUser {
  static AUTHED_USER = "AUTHED_USER";
  static setAuthedUser = (authedUser) => ({
    type: AuthedUser.AUTHED_USER,
    authedUser,
  });

  static handleAuthedUserSetup = (authedUser) => {
    return (dispatch) => {
      localStorage.setItem("authedUser", JSON.stringify(authedUser));
      dispatch(AuthedUser.setAuthedUser(authedUser));
    };
  };
}
