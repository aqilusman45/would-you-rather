import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import QuestionsListItem from "./Questions_List_Item";
import selectedQuestions from "../store/selectors/questions_list_selector";
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

const mapStateToProps = (state, props) => ({
  questionsList: selectedQuestions(state, props),
});

export default connect(mapStateToProps)(QuestionsList);
