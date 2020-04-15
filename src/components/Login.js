import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SignInFrom from "./SignIn_Form";
const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #e8cece",
    padding: "25px 10px",
  },
  container: {
    marginTop: "5em",
  },
  titleContainer: {
    border: "1px solid #e8cece",
    borderRadius: "10px 10px 0px 0px",
    padding: "20px 0",
    borderBottom: "none",
  },
  heading: {
    fontSize: "17px",
  },
}));

export const Login = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <Typography
            className={classes.heading}
            align="center"
            component="h1"
            variant="h6"
          >
            Welcome to the Would You Rather React App!
          </Typography>
          <Typography
            className={classes.heading}
            align="center"
            component="h1"
            variant="h6"
          >
            Please sign in to continue.
          </Typography>
        </div>
        <SignInFrom />
      </div>
    </Container>
  );
};
