import React from "react";
import { Link } from "react-router-dom";
const PollNotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="loading-text">Poll Not Found</h1>
      <Link to="/questions">Go back to Questions</Link>
    </div>
  );
};

export default PollNotFound;
