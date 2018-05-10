import React from "react";
import classes from "./Layout.css";

import auxWrapper from "../../hoc/auxWrapper";

const layout = props => (
  <auxWrapper>
    <div>ToolBar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </auxWrapper>
);

export default layout;
