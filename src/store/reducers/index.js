import { combineReducers } from "redux";
import { users } from "./users";
import { questions } from "./questions";
import { authedUser } from "./authedUser";
import { alerts } from "./alerts";
import { loading } from "./loading";
import { route } from "./route";
export default combineReducers({
  users,
  questions,
  authedUser,
  alerts,
  loading,
  route,
});
