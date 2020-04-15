import React from "react";
import Avatar from "./Avatar";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";

function trophyColor(position) {
  switch (position) {
    case 1:
      return "#FFD700";
    case 2:
      return "#cd7f32";
    case 3:
      return "#C0C0C0";
    default:
      return "#000000";
  }
}

export const LeadersListItem = ({ user, position }) => {
  return (
    <li>
      <div key={user.id}>
        <div className="answered-question-container">
          <div className="top-margin">
            <div className="question-content-container">
              <div className="author-avatar">
                <FontAwesome
                  className="trophy-icon"
                  name="trophy"
                  size="2x"
                  style={{ color: trophyColor(position) }}
                />
                <Avatar
                  size="large"
                  userName="none"
                  userImage={user.avatarURL}
                />
              </div>
              <div className="question-text-container">
                <div>
                  <h2>{user.name}</h2>
                </div>
                <div>
                  <p>
                    Answered Questions:{" "}
                    <strong>{Object.keys(user.answers).length}</strong>
                  </p>
                </div>
                <div>
                  <p>
                    Created Questions: <strong>{user.questions.length}</strong>
                  </p>
                </div>
              </div>
              <div className="score-container">
                <h3>Score</h3>
                <div>
                  <h4>{user.totalScore}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

LeadersListItem.prototype = {
  user: PropTypes.object,
  position: PropTypes.number,
};
