import React from "react";
import withAuthentication from "../utils/authentication";
import { NavBar } from "./NavBar";
const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <h1>Dashboard</h1>
    </div>
  );
};

export default withAuthentication(Dashboard);
