import { Routes } from "../actions/route";

export function route(state = null, action) {
  switch (action.type) {
    case Routes.TO_NOT_FOUND:
      return action.route;
    case Routes.CLEAR_ROUTE:
      return null;
    default:
      return state;
  }
}
