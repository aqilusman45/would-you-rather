import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { UserAvatars } from "./Avatar";
import { connect } from "react-redux";

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

const SignInFrom = ({ users }) => {
  const [user, setUser] = useState({});
  const classes = useStyles();

  const selectUser = (e) => {
    setUser(users.find((user) => user.id === e.target.value));
  };

  return (
    <div className={classes.paper}>
      <UserAvatars img={user.avatarURL} />
      <form className={classes.form} noValidate>
        <FormControl className={classes.formControl}>
          <InputLabel id="user-select">Select User</InputLabel>
          <Select
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

const mapStateToProps = ({ users }) => {
  return {
    users: Object.values(users),
  };
};

export default connect(mapStateToProps)(SignInFrom);
