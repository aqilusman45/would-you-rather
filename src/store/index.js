import { createStore } from "redux";
import middleware from "./middleware";
import rootReducer from "./reducers";

export default createStore(rootReducer, middleware);
