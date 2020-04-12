import React from "react";
import Avatar from "./Avatar";
import PropTypes from "prop-types";
import { Questions } from "../store/actions/questions";
import { connect } from "react-redux";

const UnAnsweredListItem = ({ question, authedUser }) => {
  const handlePollSubmit = (e) => {
    e.preventDefault();
    e.persist();

    const option = e.target.elements.option.value;
    console.log("www", option, authedUser.id, question.id);

    Questions.answerQuestion({
      answer: option,
      authedUser: authedUser.id,
      qid: question.id,
    });
  };

  return (
    <div key={question.id}>
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
            <form onSubmit={handlePollSubmit}>
              <div>
                <label>
                  {question.optionOne.text}
                  <input
                    required
                    name="option"
                    type="radio"
                    value="optionOne"
                  />
                </label>
              </div>
              <div>
                <label>
                  {question.optionTwo.text}
                  <input
                    required
                    name="option"
                    type="radio"
                    value="optionTwo"
                  />
                </label>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

UnAnsweredListItem.prototype = {
  question: PropTypes.object,
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});
export default connect(mapStateToProps)(UnAnsweredListItem);
