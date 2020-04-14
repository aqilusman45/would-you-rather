import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Questions } from "../store/actions/questions";
import { useHistory } from "react-router-dom";

const CreateQuestion = ({ authedUser, dispatch, loading }) => {
  const { push } = useHistory();

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    e.persist();
    const optionOneText = e.target.elements.optionOne.value;
    const optionTwoText = e.target.elements.optionTwo.value;
    const author = authedUser.id;
    dispatch(
      Questions.saveQuestion(
        {
          author,
          optionOneText,
          optionTwoText,
        },
        () => {
          push("/questions");
        }
      )
    );
  };

  if (loading) {
    return <h1 className="loading-text">Loading</h1>;
  }

  return (
    <div className="answered-question-container">
      <div className="top-margin">
        <div className="question-heading">
          <h5>Create new question</h5>
        </div>
        <div className="create-question">
          <div>
            <h4>Complete the question:</h4>
          </div>
          <div>
            <h3>Would you rather...</h3>
          </div>
          <div>
            <form onSubmit={handleSubmitQuestion}>
              <div className="label-container-create-question">
                <label>
                  <input
                    placeholder="Enter option one text here."
                    required
                    name="optionOne"
                    type="text"
                  />
                </label>
              </div>
              <div style={{ textAlign: "center" }}>
                <h2>OR</h2>
              </div>
              <div className="label-container-create-question">
                <label>
                  <input
                    placeholder="Enter option two text here."
                    required
                    name="optionTwo"
                    type="text"
                  />
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
  );
};

CreateQuestion.prototype = {
  authedUser: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = ({ authedUser, loading }) => ({
  authedUser,
  loading,
});

export default connect(mapStateToProps)(CreateQuestion);
