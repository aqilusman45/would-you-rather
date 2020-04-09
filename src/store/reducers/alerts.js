import { Alerts } from "../actions/alerts";

export const alerts = (state = "", action) => {
  switch (action.type) {
    case Alerts.SET_ALERT:
      return { ...state, msg: action.msg };
    case Alerts.CLEAR_ALERT:
      return { ...state, msg: action.msg };
    default:
      return state;
  }
};
