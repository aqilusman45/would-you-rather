export class Loading {
  static RECEIVE_DATA = "RECEIVE_DATA";

  static dataReceived = (users, questions) => ({
    type: Loading.RECEIVE_DATA,
    users,
    questions,
  });
}
