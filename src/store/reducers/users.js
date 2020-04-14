import { Users } from "../actions/users";
import { Loading } from "../actions/loading";
import { Questions } from "../actions/questions";

export const users = (state = {}, action) => {
  switch (action.type) {
    case Users.SET_USERS:
    case Loading.RECEIVE_DATA:
      return action.users;
    case Questions.ADD_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id,
          ]),
        },
      };
    default:
      return state;
  }
};
