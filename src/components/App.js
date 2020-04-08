import React, { useState } from "react";
import { getInitialState } from "../store/actions/shared";
import { connect } from "react-redux";
import { Questions } from "../store/actions/questions";
import { Users } from "../store/actions/users";
import { Switch, Route } from "react-router-dom";
import { Login } from "./Login.js";
import Dashboard from "./Dashboard";
import NotFound from "./Not_Found";

function App({ users, questions, dispatch }) {
  useState(async () => {
    const [users, questions] = await getInitialState();
    dispatch(Questions.setQuestions(questions));
    dispatch(Users.setUsers(users));
  });
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ users, questions }) => ({
  users,
  questions,
});

export default connect(mapStateToProps)(App);
