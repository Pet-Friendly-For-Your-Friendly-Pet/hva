import React from "react";
import classes from "./Layout.css";

import AuxWrapper from "../../hoc/AuxWrapper.js";

const layout = props => (
  <AuxWrapper>
    <div>ToolBar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </AuxWrapper>
);

export default layout;
