import { _saveQuestionAnswer, _saveQuestion } from "../../utils/_DATA";
import { getStateFromDB } from "./shared";
import { Users } from "./users";
export class Questions {
  static SET_QUESTIONS = "SET_QUESTIONS";
  static ANSWER_QUESTION = "ANSWER_QUESTION";
  static ADD_QUESTION = "ADD_QUESTION";

  static setAnswer = (question) => ({
    type: Questions.SET_QUESTIONS,
    question,
  });

  static addQuestion = (question) => ({
    type: Questions.ADD_QUESTION,
    question,
  });

  static setQuestions = (questions) => ({
    type: Questions.SET_QUESTIONS,
    questions,
  });

  static saveQuestion = ({ author, optionOneText, optionTwoText }, cb) => {
    return async (dispatch) => {
      try {
        const result = await _saveQuestion({
          author,
          optionOneText,
          optionTwoText,
        });
        console.log(result);

        dispatch(Questions.addQuestion(result));
        cb();
      } catch (error) {
        console.log(error);
      }
    };
  };

  static answerQuestion = ({ answer, authedUser, qid }) => {
    return async (dispatch) => {
      try {
        await _saveQuestionAnswer({ qid, answer, authedUser });
        const [users, questions] = await getStateFromDB();
        dispatch(Questions.setQuestions(questions));
        dispatch(Users.setUsers(users));
      } catch (error) {
        console.log(error);
      }
    };
  };
}
