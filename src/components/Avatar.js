import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import placeholder from "../assets/placeholder.png";
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
}));

export const UserAvatars = ({ img }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src={img || placeholder}
        className={classes.large}
      />
    </div>
  );
};
