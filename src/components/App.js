import React, { useState } from "react";
import { getInitialState } from "../store/actions/shared";
import { connect } from "react-redux";
import { Questions } from "../store/actions/questions";
import { Users } from "../store/actions/users";
import { Switch, Route } from "react-router-dom";
import { Login } from "./Login.js";
import Dashboard from "./Dashboard";
import NotFound from "./Not_Found";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import withAuthentication from "../utils/authentication";
import { AuthedUser } from "../store/actions/authedUser";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  alert: {
    width: "400px",
    margin: "10px auto",
    position: "absolute",
    left: "36.8%",
    bottom: "5%",
  },
}));

function App({ users, questions, dispatch, alerts }) {
  const classes = useStyles();
  useState(async () => {
    if (localStorage.getItem("authedUser") !== null) {
      dispatch(
        AuthedUser.setAuthedUser(JSON.parse(localStorage.getItem("authedUser")))
      );
    }
    const [users, questions] = await getInitialState();
    dispatch(Questions.setQuestions(questions));
    dispatch(Users.setUsers(users));
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
      <div className={classes.alert}>
        {alerts.msg && <Alert severity="error">{alerts.msg}</Alert>}
      </div>
    </div>
  );
}

App.prototype = {
  users: PropTypes.object,
  questions: PropTypes.object,
  dispatch: PropTypes.func,
  alert: PropTypes.object,
};

const mapStateToProps = ({ users, questions, alerts }) => ({
  users,
  questions,
  alerts,
});

export default connect(mapStateToProps)(withAuthentication(App));
