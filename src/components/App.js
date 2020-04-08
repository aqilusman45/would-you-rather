import React, { useState } from "react";
import { getInitialState } from "./store/actions/shared";
import { connect } from "react-redux";
import { Questions } from "./store/actions/questions";
import { Users } from "./store/actions/users";

function App({ users, questions, dispatch }) {
  useState(async () => {
    const [users, questions] = await getInitialState();
    dispatch(Questions.setQuestions(questions));
    dispatch(Users.setUsers(users));
  });
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

const mapStateToProps = ({ users, questions }) => ({
  users,
  questions,
});

export default connect(mapStateToProps)(App);
