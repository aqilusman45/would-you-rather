import { createSelector } from "reselect";

const questionsSelector = (state) => state.questions;
const usersSelector = (state) => state.users;
const questionsToShowSelector = (state, props) => props.questionsToShow;

const getQuestions = (questions, users, questionsToShow) => {
  const questionsList = questionsToShow
    .map((id) => {
      return {
        ...questions[id],
        author: {
          ...users[questions[id].author],
        },
      };
    })
    .sort((a, b) => b.timestamp - a.timestamp);
  return [...questionsList];
};

export default createSelector(
  questionsSelector,
  usersSelector,
  questionsToShowSelector,
  getQuestions
);
