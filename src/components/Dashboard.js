import React from "react";
import withAuthentication from "../utils/authentication";
import NavBar from "./Navbar";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import NewQuestion from "./New_Question";
import { ViewQuestion } from "./View_Question";
import { LeaderBoard } from "./Leaderboard";
import Questions from "./Questions";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  contentWrapper: {
    width: "50%",
    margin: "auto",
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();
  return (
    <div>
      <NavBar />
      <div className={classes.contentWrapper}>
        <Switch>
          <Route exact path={path} component={Questions} />
          <Route exact path={`${path}/new-question`} component={NewQuestion} />
          <Route exact path={`${path}/leaderboard`} component={LeaderBoard} />
          <Route path={`${path}/:questionId`} component={ViewQuestion} />
        </Switch>
      </div>
    </div>
  );
};

export default withAuthentication(Dashboard);
