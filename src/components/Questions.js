import React, { useState } from "react";
import { connect } from "react-redux";
import { sortAnsweredUnanswered } from "../utils/handleQuestions";
import PropTypes from "prop-types";
import QuestionsList from "./Questions_List";

const Questions = ({ answered, unAnswered, loading }) => {
  const [showUnAnswered, setShowUnanswered] = useState(true);

  const enableshowAnswered = () => setShowUnanswered(false);

  const enableUnAnswered = () => setShowUnanswered(true);

  if (loading) {
    return <h1 className="loading-text">Loading</h1>;
  }

  return (
    <div className="questions-section">
      <div id="selection-pills">
        <div className="questions-pills-container">
          <button onClick={enableUnAnswered} disabled={showUnAnswered}>
            unanswered
          </button>
        </div>
        <div className="questions-pills-container">
          <button onClick={enableshowAnswered} disabled={!showUnAnswered}>
            answered
          </button>
        </div>
      </div>
      <div id="questions-list">
        {showUnAnswered ? (
          <QuestionsList questionsToShow={unAnswered} />
        ) : (
          <QuestionsList questionsToShow={answered} />
        )}
      </div>
    </div>
  );
};

Questions.prototype = {
  answered: PropTypes.array,
  unAnswered: PropTypes.array,
  loading: PropTypes.bool,
};

const mapStateToProps = ({ questions, authedUser, loading }) => {
  const [answered, unAnswered] = sortAnsweredUnanswered(
    Object.values(questions),
    authedUser?.id
  );
  return {
    answered,
    unAnswered,
    loading,
  };
};

export default connect(mapStateToProps)(Questions);
