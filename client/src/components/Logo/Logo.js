import React from "react";
import classes from "./Logo.css";

import hillviewLogo from "../../assets/images/hillviewLogo.png";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <a href="/">
      <img src={hillviewLogo} alt="HillViewArena" />
    </a>
  </div>
);

export default logo;
