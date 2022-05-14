import React from "react";
import { useLocation } from "react-router-dom";
import { Details } from "../Components";
const Detailspage = () => {
  const location = useLocation();
  const state = location.state;
  return <Details countries={state} />;
};
export default Detailspage;
