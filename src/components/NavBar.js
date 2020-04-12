import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LogOut from "./Logout";
import { withRouter, useRouteMatch, Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
const useStyles = makeStyles((theme) => ({
  navBar: {
    justifyContent: "center",
    background: "#3f51b5",
  },
  tab: {
    color: "white",
  },
  ul: {
    margin: "auto",
    listStyle: "none",
    textAlign: "center",
  },
  li: {
    display: "inline-block",
    height: "auto",
    padding: "20px 40px",
    "&:hover": {
      backgroundColor: "#303f9f",
      cursor: "pointer",
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    },
  },
  liText: {
    color: "white",
  },
  liLinke: {
    textDecoration: "none",
  },
  textContainer: {
    height: "40px",
  },
  logOut: {
    display: "inline-block",
    height: "auto",
    "&:hover": {
      backgroundColor: "#303f9f",
      cursor: "pointer",
      boxShadow:
        "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
    },
  },
}));

const NAV_LINKS = [
  {
    link: "",
    text: "Dashboard",
  },
  {
    link: "/new-question",
    text: "New Question",
  },
  {
    link: "/leaderboard",
    text: "Leaderboard",
  },
];

const NavBar = ({ location }) => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  console.log(url);

  return (
    <div className={classes.navBar}>
      <div>
        <nav>
          <ul className={classes.ul}>
            {NAV_LINKS.map((route) => (
              <Link
                key={route.text}
                className={classes.liLinke}
                to={`${url}${route.link}`}
              >
                <li className={classes.li}>
                  <div className={classes.textContainer}>
                    <Typography className={classes.liText} variant="h6">
                      {route.text}
                    </Typography>
                  </div>
                </li>
              </Link>
            ))}
            <li className={classes.logOut}>
              <LogOut />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

NavBar.prototype = {
  location: PropTypes.string,
};

export default withRouter(NavBar);
