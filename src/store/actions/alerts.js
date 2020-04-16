export class Alerts {
  static SET_ALERT = "SET_ALERT";
  static CLEAR_ALERT = "SET_ALERT";

  static setAlert = (msg) => ({
    type: Alerts.SET_ALERT,
    msg,
  });

  static clearAlert = () => ({
    type: Alerts.CLEAR_ALERT,
    msg: "",
  });

  static handleAlerts = (msg, time) => {
    return (dispatch) => {
      dispatch(Alerts.setAlert(msg));
      setTimeout(() => {
        dispatch(Alerts.clearAlert());
      }, time);
    };
  };
}
