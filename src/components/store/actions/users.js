export class Users {
  static SET_USERS = "SET_USERS";
  static setUsers = (users) => ({
    type: Users.SET_USERS,
    users,
  });
}
