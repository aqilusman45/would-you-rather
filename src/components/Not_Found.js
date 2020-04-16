import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="loading-text">Link Not Found</h1>
      <Link to="/questions">Go back to Questions</Link>
    </div>
  );
};

export default NotFound;
