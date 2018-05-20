import React from "react";
import classes from "./Layout.css";

import AuxWrapper from "../../hoc/auxWrapper";
import Services from "../../containers/Services/Services";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

const layout = props => (
  <AuxWrapper>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </AuxWrapper>
);

export default layout;
