import React from "react";
import classes from "./Logo.css";

import hillviewLogo from "../../assets/images/hillviewLogo.png";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={hillviewLogo} alt="HillViewArena" />
  </div>
);

export default logo;
