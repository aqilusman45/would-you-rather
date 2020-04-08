export class AuthedUser {
  static AUTHED_USER = "AUTHED_USER";
  static setAuthedUser = (authedUser) => ({
    type: AuthedUser.AUTHED_USER,
    authedUser,
  });
}
