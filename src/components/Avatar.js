import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import placeholder from "../assets/placeholder.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: "0 8px",
    },
  },
  large: {
    width: "150px",
    height: "150px",
  },
  avatarText: {
    margin: "auto",
    color: "white",
  },
}));

const UserAvatars = ({ signInAvatar, size, userImage, userName }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {userName !== "none" ? (
        <Typography className={classes.avatarText}>{userName}</Typography>
      ) : null}
      <Avatar
        src={signInAvatar || userImage || placeholder}
        className={classes[size]}
      />
    </div>
  );
};
UserAvatars.prototype = {
  img: PropTypes.string,
  signInAvatar: PropTypes.string,
  size: PropTypes.string,
  userImage: PropTypes.string,
  userName: PropTypes.string,
};

const mapStateToProps = ({ authedUser }, { userImage, userName }) => ({
  userImage: userImage || authedUser?.avatarURL,
  userName: userName || authedUser?.name,
});
export default connect(mapStateToProps)(withRouter(UserAvatars));
