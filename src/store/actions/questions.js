export class Questions {
  static SET_QUESTIONS = "SET_QUESTIONS";
  static setQuestions = (questions) => ({
    type: Questions.SET_QUESTIONS,
    questions,
  });
}
