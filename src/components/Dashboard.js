import React from "react";
import withAuthentication from "../utils/authentication";

const Dashboard = () => {
  return <h1>Dashboard Screen</h1>;
};

export default withAuthentication(Dashboard);
