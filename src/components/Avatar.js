import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import placeholder from "../assets/placeholder.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: "150px",
    height: "150px",
  },
  avatarText: {
    margin: "auto",
  },
}));

const UserAvatars = ({ signInAvatar, size, userImage, userName }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.avatarText}>{userName}</p>
      <Avatar
        src={signInAvatar || userImage || placeholder}
        className={classes[size]}
      />
    </div>
  );
};
UserAvatars.prototype = {
  img: PropTypes.string,
};

const mapStateToProps = ({ authedUser }) => ({
  userImage: authedUser?.avatarURL,
  userName: authedUser?.name,
});
export default connect(mapStateToProps)(withRouter(UserAvatars));
