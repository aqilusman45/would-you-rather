import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const { history, authedUser, location } = props;

    useEffect(() => {
      if (authedUser === null && localStorage.getItem("authedUser") === null) {
        history.push("/");
      } else if (location.pathname === "/") {
        history.push("/questions");
      }
    }, [authedUser, history, location.pathname]);

    return <Component {...props} />;
  };
  WithAuthentication.prototype = {
    props: {
      history: PropTypes.object,
      authedUser: PropTypes.object,
    },
  };
  const mapStateToProps = ({ authedUser }) => ({
    authedUser,
  });
  return connect(mapStateToProps)(withRouter(WithAuthentication));
};

export default withAuthentication;
