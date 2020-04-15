import React, { useState } from "react";
import Popover from "@material-ui/core/Popover";
import UserAvatars from "./Avatar";
import { connect } from "react-redux";
import { AuthedUser } from "../store/actions/authedUser";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  avatarContainer: {
    padding: "21px 27px",
  },
  popup: {
    background: "lightgray",
    padding: "16px 70px",
    cursor: "pointer",
  },
}));

const LogOut = ({ dispatch }) => {
  const [visible, setVisibility] = useState(null);
  const logOut = () => {
    dispatch(AuthedUser.handleLogOut());
  };

  const handleClose = () => {
    setVisibility(null);
  };

  const handleClick = (event) => {
    setVisibility(event.currentTarget);
  };

  const open = Boolean(visible);

  const id = visible ? "simple-popover" : undefined;

  const classes = useStyles();

  return (
    <div className={classes.avatarContainer} onClick={handleClick}>
      <UserAvatars />
      <Popover
        id={id}
        open={open}
        onBlur={handleClose}
        anchorEl={visible}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className={classes.popup} onClick={logOut}>
          <Typography variant="h6">Log out</Typography>
        </div>
      </Popover>
    </div>
  );
};

LogOut.prototype = {
  dispatch: PropTypes.string,
};

export default connect()(withRouter(LogOut));
