import { Questions } from "../actions/questions";
import { Loading } from "../actions/loading";

export const questions = (state = [], action) => {
  switch (action.type) {
    case Questions.SET_QUESTIONS:
    case Loading.RECEIVE_DATA:
      return action.questions;
    case Questions.ANSWER_QUESTION:
      return state;
    case Questions.ADD_QUESTION:
      return { ...state, [action.question.id]: { ...action.question } };
    default:
      return state;
  }
};
