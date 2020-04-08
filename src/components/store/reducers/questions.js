import { Questions } from "../actions/questions";

export const questions = (state = [], action) => {
  switch (action.type) {
    case Questions.SET_QUESTIONS:
      return { ...state, ...action.questions };
    default:
      return state;
  }
};
