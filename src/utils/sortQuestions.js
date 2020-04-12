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
