import React from "react";
import Avatar from "./Avatar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const QuestionsListItem = ({ question, authedUser }) => {
  return (
    <li className="questions-list-item" key={question.id}>
      <div>
        <div className="question-heading">
          <h5>{question.author.name} asks:</h5>
        </div>
        <div className="question-content-container">
          <div className="author-avatar">
            <Avatar
              size="large"
              userName="none"
              userImage={question.author.avatarURL}
            />
          </div>
          <div className="question-text-container">
            <div>
              <h4>Would You Rather ...</h4>
            </div>
            <div>
              <p> ...{question.optionOne.text.slice(0, 20)}...</p>
            </div>
            <Link className="view-poll" to={`questions/${question.id}`}>
              <p>View Poll</p>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
};

QuestionsListItem.prototype = {
  question: PropTypes.object,
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});
export default connect(mapStateToProps)(QuestionsListItem);
