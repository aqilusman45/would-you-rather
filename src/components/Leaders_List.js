import React from "react";
import Avatar from "./Avatar";

export const LeadersListItem = ({ user }) => {
  console.log("user", user);

  return (
    <li>
      <div key={user.id}>
        <div className="answered-question-container">
          <div className="top-margin">
            <div className="question-content-container">
              <div className="author-avatar">
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
                    Answered Questions{" "}
                    <strong>{Object.keys(user.answers).length}</strong>
                  </p>
                </div>
                <div>
                  <p>
                    Created Questions <strong>{user.questions.length}</strong>
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
