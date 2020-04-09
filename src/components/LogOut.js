import React, { useState } from "react";
import Tab from "@material-ui/core/Tab";
import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import UserAvatars from "./Avatar";
import { connect } from "react-redux";
import { AuthedUser } from "../store/actions/authedUser";
import { withRouter } from "react-router-dom";

const LogOut = ({ dispatch }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const logOut = () => {
    dispatch(AuthedUser.logOutUser());
  };
  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <UserAvatars />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
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
        <Tab onClick={logOut} label="Log out" />
      </Popover>
    </div>
  );
};

export default connect()(withRouter(LogOut));
