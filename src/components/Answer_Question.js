import React from "react";
import Avatar from "./Avatar";
import PropTypes from "prop-types";
import { Questions } from "../store/actions/questions";
import { connect } from "react-redux";

const AnswerQuestion = ({ question, authedUser, dispatch }) => {
  const handlePollSubmit = (e) => {
    e.preventDefault();
    e.persist();

    const option = e.target.elements.option.value;

    dispatch(
      Questions.answerQuestion({
        answer: option,
        authedUser: authedUser.id,
        qid: question.id,
      })
    );
  };
  console.log(question);

  return (
    <div key={question.id}>
      <div className="answered-question-container">
        <div className="top-margin">
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
                <h4>Would you rather...</h4>
              </div>
              <div>
                <form onSubmit={handlePollSubmit}>
                  <div className="label-container">
                    <label>
                      <input
                        required
                        name="option"
                        type="radio"
                        value="optionOne"
                      />
                      {question.optionOne.text}
                    </label>
                  </div>
                  <div className="label-container">
                    <label>
                      <input
                        required
                        name="option"
                        type="radio"
                        value="optionTwo"
                      />
                      {question.optionTwo.text}
                    </label>
                  </div>
                  <div className="button-container">
                    <button className="answer-submit-button" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AnswerQuestion.prototype = {
  question: PropTypes.object,
};

export default connect()(AnswerQuestion);
