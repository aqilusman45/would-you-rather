import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LeadersListItem } from "./Leaders_List";
const LeaderBoard = ({ leaders, loading }) => {
  if (loading) {
    return <h1 className="loading-text">Loading</h1>;
  }

  return (
    <div>
      <ul className="leaders-list">
        {leaders.map((leader, index) => (
          <LeadersListItem key={leader.id} user={leader} position={index + 1} />
        ))}
      </ul>
    </div>
  );
};

LeaderBoard.prototype = {
  users: PropTypes.array,
};

const mapStateToProps = ({ users, loading }) => {
  let leaders;

  if (!loading) {
    leaders = Object.values(users)
      .map((user, index) => {
        let totalScore =
          Object.keys(user.answers).length + user.questions.length;
        return {
          ...user,
          totalScore,
        };
      })
      .sort((a, b) => b.totalScore - a.totalScore);
  }

  return {
    leaders,
    loading,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
