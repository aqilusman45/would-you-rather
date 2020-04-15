import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { questionStatus } from "../utils/handleQuestions";
import PropTypes from "prop-types";
import AnswerQuestion from "./Answer_Question";
import AnsweredQuestions from "./Answered_Question";

const ViewQuestion = ({ authedUser, question, status, loading }) => {
  const { push } = useHistory();
  useEffect(() => {
    if (typeof question === "undefined" && loading) {
      push("/not-found");
    }
  }, [question, push, loading]);

  if (loading) {
    return <h1 className="loading-text">loading</h1>;
  }

  if (status) {
    return (
      <div>
        <AnsweredQuestions authedUser={authedUser} question={question} />
      </div>
    );
  } else {
    return (
      <div>
        <AnswerQuestion authedUser={authedUser} question={question} />
      </div>
    );
  }
};

ViewQuestion.prototype = {
  authedUser: PropTypes.object,
  question: PropTypes.object,
  status: PropTypes.bool,
  loading: PropTypes.bool,
};

const mapStateToProps = (
  { questions, authedUser, loading, users },
  { match }
) => {
  let question;

  if (!loading && typeof questions[match.params.question_id] !== "undefined") {
    question = {
      ...questions[match.params.question_id],
      author: {
        ...users[questions[match.params.question_id].author],
      },
    };
  }
  const status = questionStatus(question, authedUser?.id);

  return {
    authedUser,
    question,
    status,
    loading,
  };
};

export default connect(mapStateToProps)(ViewQuestion);
