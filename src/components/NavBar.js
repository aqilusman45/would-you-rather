import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import LogOut from "./LogOut";

const useStyles = makeStyles((theme) => ({
  navBar: {
    "& > div > div": {
      justifyContent: "center",
      background: "#3f51b5",
    },
  },
  tab: {
    color: "white",
  },
}));

const NAV_LINKS = [
  {
    link: "/",
    text: "Questions",
  },
  {
    link: "/",
    text: "Leaderboard",
  },
];

export const NavBar = () => {
  const classes = useStyles();

  return (
    <Tabs className={classes.navBar} aria-label="simple tabs example">
      {NAV_LINKS.map((link) => (
        <Tab className={classes.tab} label={link.text} />
      ))}
      <LogOut />
    </Tabs>
  );
};
