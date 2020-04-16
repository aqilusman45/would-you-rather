import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Routes } from "../store/actions/route";
import PropTypes from "prop-types";

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const { history, authedUser, location, route, dispatch } = props;

    useEffect(() => {
      if (authedUser === null && localStorage.getItem("authedUser") === null) {
        history.push("/");
      } else if (route !== null) {
        dispatch(Routes.clearRoute());
        history.push(route);
      } else if (location.pathname === "/") {
        history.push("/questions");
      }
    }, [
      authedUser,
      history,
      location.pathname,
      location.state,
      route,
      dispatch,
    ]);

    return <Component {...props} />;
  };
  WithAuthentication.prototype = {
    props: {
      history: PropTypes.object,
      authedUser: PropTypes.object,
      route: PropTypes.string,
    },
  };
  const mapStateToProps = ({ authedUser, route }) => ({
    authedUser,
    route,
  });
  return connect(mapStateToProps)(withRouter(WithAuthentication));
};

export default withAuthentication;
