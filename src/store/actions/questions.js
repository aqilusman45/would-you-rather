import { _saveQuestionAnswer, _saveQuestion } from "../../utils/_DATA";
import { getStateFromDB } from "./shared";
import { Users } from "./users";
import { Alerts } from "./alerts";
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
    return (dispatch) => {
      _saveQuestion({
        author,
        optionOneText,
        optionTwoText,
      })
        .then((res) => {
          cb();
          getStateFromDB().then(([users, questions]) => {
            dispatch(Questions.setQuestions(questions));
            dispatch(Users.setUsers(users));
          });
        })
        .catch(() => {
          dispatch(
            Alerts.handleAlerts(
              "Unable to add question, please try again.",
              3000
            )
          );
        });
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
        dispatch(
          Alerts.handleAlerts("Unable to add question, please try again.", 3000)
        );
      }
    };
  };
}
