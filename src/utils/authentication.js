import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    useState(() => {
      if (props.authedUser === null) {
        props.history.push("/");
      }
    });
    return <Component {...props} />;
  };

  const mapStateToProps = ({ authedUser }) => ({
    authedUser,
  });
  return connect(mapStateToProps)(withRouter(WithAuthentication));
};

export default withAuthentication;
