export function sortAnsweredUnanswered(questions, userId) {
  let answered = [];
  let unAnswered = [];
  questions.forEach((question) => {
    const arrayToFindIdFrom = [
      ...question.optionOne.votes,
      ...question.optionTwo.votes,
    ];
    if (arrayToFindIdFrom.includes(userId)) {
      answered.push(question.id);
    } else {
      unAnswered.push(question.id);
    }
  });
  return [answered, unAnswered];
}

export function questionStatus(question = [], userId = "") {
  let arrayToFindIdFrom = [];
  if (question.length !== 0) {
    arrayToFindIdFrom = [
      ...question.optionOne.votes,
      ...question.optionTwo.votes,
    ];
  }
  if (arrayToFindIdFrom.includes(userId)) {
    return true;
  }
  return false;
}
