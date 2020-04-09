import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const { history, authedUser } = props;
    useEffect(() => {
      if (authedUser === null) {
        history.push("/");
      } else {
        history.push("/dashboard");
      }
    }, [authedUser, history]);
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
