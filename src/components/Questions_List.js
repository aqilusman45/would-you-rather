import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import QuestionsListItem from "./Questions_List_Item";

const QuestionsList = ({ questionsList }) => {
  return (
    <div id="unanswered">
      <ul>
        {questionsList.map((question) => (
          <QuestionsListItem key={question.id} question={question} />
        ))}
      </ul>
    </div>
  );
};

QuestionsList.prototype = {
  questionsList: PropTypes.array,
};

const mapStateToProps = ({ questions, users }, { questionsToShow }) => {
  const questionsList = questionsToShow
    .map((id) => {
      const getQuestion = Object.values(questions).find(
        (question) => question.id === id
      );

      const getAuthorDetails = Object.values(users).find(
        (user) => getQuestion.author === user.id
      );

      return {
        ...getQuestion,
        author: {
          ...getAuthorDetails,
        },
      };
    })
    .sort((a, b) => a.timestamp - b.timestamp);
  return {
    questionsList,
  };
};

export default connect(mapStateToProps)(QuestionsList);
