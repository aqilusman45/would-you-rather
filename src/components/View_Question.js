import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { questionStatus } from "../utils/handleQuestions";
import PropTypes from "prop-types";
import AnswerQuestion from "./Answer_Question";
import AnsweredQuestions from "./Answered_Question";
import { AuthedUser } from "../store/actions/authedUser";
import { Alerts } from "../store/actions/alerts";
import { Routes } from "../store/actions/route";

const ViewQuestion = ({ authedUser, question, status, loading, dispatch }) => {
  const { push } = useHistory();
  useEffect(() => {
    if (!loading && typeof question === "undefined") {
      dispatch(AuthedUser.handleLogOut());
      dispatch(Alerts.handleAlerts("Please log in to continue.", 3000));
      dispatch(Routes.setRoute("/not-found"));
    }
  }, [question, push, loading, dispatch]);

  if (loading) {
    return <h1 className="loading-text">loading</h1>;
  }

  if (status) {
    return (
      <div>
        <AnsweredQuestions authedUser={authedUser} question={question} />
      </div>
    );
  }

  if (status !== undefined) {
    return (
      <div>
        <AnswerQuestion authedUser={authedUser} question={question} />
      </div>
    );
  }
  return null;
};

ViewQuestion.prototype = {
  authedUser: PropTypes.object,
  question: PropTypes.object,
  status: PropTypes.bool,
  loading: PropTypes.bool,
  dispatch: PropTypes.func,
};

const mapStateToProps = (
  { questions, authedUser, loading, users },
  { match }
) => {
  let question;
  let status;
  if (!loading && typeof questions[match.params.question_id] !== "undefined") {
    question = {
      ...questions[match.params.question_id],
      author: {
        ...users[questions[match.params.question_id].author],
      },
    };
    status = questionStatus(question, authedUser?.id);
  }
  return {
    authedUser,
    question,
    status,
    loading,
  };
};

export default connect(mapStateToProps)(ViewQuestion);
