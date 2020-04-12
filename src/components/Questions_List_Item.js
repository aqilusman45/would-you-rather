import React from "react";
import Avatar from "./Avatar";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const QuestionsListItem = ({ question, authedUser }) => {
  return (
    <li key={question.id}>
      <div>
        <h5>{question.author.name} asks:</h5>
        <div>
          <div>
            <Avatar
              size="large"
              userName="none"
              userImage={question.author.avatarURL}
            />
          </div>
          <div>
            <h4>Would You Rather ...</h4>
          </div>
          <div>
            <p> {question.optionOne.text}</p>
          </div>
          <div>
            <Link to={question.id}>View Poll</Link>
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
