import { Loading } from "../actions/loading";

export function loading(state = true, action) {
  switch (action.type) {
    case Loading.RECEIVE_DATA:
      return false;
    default:
      return state;
  }
}
