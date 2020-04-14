import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import QuestionsListItem from "./Questions_List_Item";

const QuestionsList = ({ questionsList }) => {
  return (
    <div id="questions">
      {questionsList.length === 0 ? (
        <h1 style={{ fontWeight: "200px" }} className="loading-text">
          Congratulations! You have answered all questions.
        </h1>
      ) : (
        <ul className="questions-list">
          {questionsList.map((question) => (
            <QuestionsListItem key={question.id} question={question} />
          ))}
        </ul>
      )}
    </div>
  );
};

QuestionsList.prototype = {
  questionsList: PropTypes.array,
};

const mapStateToProps = ({ questions, users }, { questionsToShow }) => {
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
  return {
    questionsList,
  };
};

export default connect(mapStateToProps)(QuestionsList);
