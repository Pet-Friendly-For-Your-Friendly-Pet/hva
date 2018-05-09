import React from "react";
import auxWrapper from "../../hoc/auxWrapper";

const layout = props => (
  <auxWrapper>
    <div>ToolBar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </auxWrapper>
);

export default layout;
