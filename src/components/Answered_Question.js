import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import LinearProgress from "@material-ui/core/LinearProgress";
import ChipAvatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";

const AnsweredQuestions = ({ question, authedUser }) => {
  const [score, setScore] = useState(1);
  const [userOptoion, setUserOption] = useState("");
  useEffect(() => {
    const totalScore =
      question.optionOne.votes.length + question.optionTwo.votes.length;

    if (question.optionOne.votes.some((voter) => voter === authedUser.id)) {
      setUserOption("optionOne");
    }
    if (question.optionTwo.votes.some((voter) => voter === authedUser.id)) {
      setUserOption("optionTwo");
    }

    setScore(totalScore);
  }, [
    question.optionOne.votes.length,
    question.optionTwo.votes.length,
    authedUser.id,
    question.optionTwo.votes,
    question.optionOne.votes,
  ]);

  return (
    <div className="answered-question-container">
      <div className="top-margin">
        <div className="question-heading">
          <h5>Asked by {question.author.name}</h5>
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
              <h4>Results...</h4>
            </div>
            <div>
              <p className="results-questions">
                Would You Rather {question.optionOne.text}
              </p>
              <Badge style={{ fontSize: "13px" }}>
                {Math.floor((question.optionOne.votes.length / score) * 100)}%
              </Badge>
              <LinearProgress
                variant="determinate"
                className="votes-percentage"
                value={(question.optionOne.votes.length / score) * 100}
              />
              {userOptoion === "optionOne" ? (
                <Badge>
                  <ChipAvatar src={authedUser.avatarURL} />
                </Badge>
              ) : null}
              <p className="vote-count">
                {question.optionOne.votes.length}{" "}
                {question.optionOne.votes.length === 1 ? "vote" : "votes"} out
                of {score}
              </p>
            </div>
            <hr />
            <div>
              <p className="results-questions">
                Would You Rather {question.optionTwo.text}
              </p>
              <Badge style={{ fontSize: "13px" }}>
                {Math.floor((question.optionTwo.votes.length / score) * 100)}%
              </Badge>
              <LinearProgress
                variant="determinate"
                className="votes-percentage"
                value={(question.optionTwo.votes.length / score) * 100}
              />
              {userOptoion === "optionTwo" ? (
                <Badge>
                  <ChipAvatar src={authedUser.avatarURL} />
                </Badge>
              ) : null}
              <p className="vote-count">
                {question.optionTwo.votes.length}{" "}
                {question.optionTwo.votes.length === 1 ? "vote" : "votes"} out
                of {score}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AnsweredQuestions.prototype = {
  question: PropTypes.object,
  authedUser: PropTypes.object,
};

export default AnsweredQuestions;
