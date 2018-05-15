import React from "react";
import classes from "./Layout.css";

import AuxWrapper from "../../hoc/auxWrapper";
import Services from "../../containers/Services/Services";

const layout = props => (
  <AuxWrapper>
    <div>ToolBar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </AuxWrapper>
);

export default layout;
