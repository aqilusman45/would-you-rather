import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import UserAvatars from "./Avatar";
import { connect } from "react-redux";
import { Alerts } from "../store/actions/alerts";
import { AuthedUser } from "../store/actions/authedUser";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: "auto",
    minWidth: "100%",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #e8cece",
    padding: "25px 10px",
  },
}));

const SignInFrom = ({ users, dispatch, history }) => {
  const [user, setUser] = useState({});
  const classes = useStyles();

  const selectUser = (e) => {
    setUser(users.find((user) => user.id === e.target.value));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (user.id === undefined) {
      dispatch(Alerts.handleAlerts("Please select user to continue.", 3000));
    } else {
      dispatch(AuthedUser.handleAuthedUserSetup(user));
      history.push("/");
    }
  };

  return (
    <div className={classes.paper}>
      <UserAvatars signInAvatar={user.avatarURL} size="large" />
      <form className={classes.form} onSubmit={formSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel id="user-select">Select User</InputLabel>
          <Select
            required
            onChange={selectUser}
            value={user.id || ""}
            labelId="user-select"
            id="user-select-box"
          >
            {users.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

SignInFrom.prototype = {
  users: PropTypes.object,
  dispatch: PropTypes.func,
  history: PropTypes.object,
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users),
  };
};

export default connect(mapStateToProps)(withRouter(SignInFrom));
