import React, { useEffect } from "react";
import { getStateFromDB } from "../store/actions/shared";
import { connect } from "react-redux";
import { Loading } from "../store/actions/loading";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { Login } from "./Login.js";
import NotFound from "./Not_Found";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import withAuthentication from "../utils/authentication";
import { AuthedUser } from "../store/actions/authedUser";
import PropTypes from "prop-types";
import NewQuestion from "./New_Question";
import ViewQuestion from "./View_Question";
import LeaderBoard from "./Leaderboard";
import Questions from "./Questions";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  alert: {
    width: "400px",
    margin: "10px auto",
    position: "absolute",
    left: "36.8%",
    bottom: "5%",
  },
}));

function App({ dispatch, alerts, users, questions, authedUser }) {
  const classes = useStyles();
  const { push } = useHistory();
  const { pathname } = useLocation();
  useEffect(() => {
    if (
      Object.keys(users).length === 0 &&
      Object.keys(questions).length === 0
    ) {
      const getData = async () => {
        if (localStorage.getItem("authedUser") !== null) {
          dispatch(
            AuthedUser.setAuthedUser(
              JSON.parse(localStorage.getItem("authedUser"))
            )
          );
        }
        const [users, questions] = await getStateFromDB();
        dispatch(Loading.dataReceived(users, questions));
      };
      getData();
    }
    return () => {};
  }, [questions, users, dispatch, pathname, push]);

  return (
    <div className="App">
      <NavBar />
      <div className="dashboard">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path={"/questions"} component={Questions} />
          <Route exact path={`/add`} component={NewQuestion} />
          <Route exact path={`/leaderboard`} component={LeaderBoard} />
          <Route
            exact
            path={`/questions/:question_id`}
            component={ViewQuestion}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <div className={classes.alert}>
        {alerts.msg && <Alert severity="error">{alerts.msg}</Alert>}
      </div>
    </div>
  );
}

App.prototype = {
  dispatch: PropTypes.func,
  alert: PropTypes.object,
  users: PropTypes.object,
  questions: PropTypes.object,
};

const mapStateToProps = ({ alerts, users, questions, authedUser }) => ({
  alerts,
  users,
  questions,
  authedUser,
});

export default connect(mapStateToProps)(withAuthentication(App));
