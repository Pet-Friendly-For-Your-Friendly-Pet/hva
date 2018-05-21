import React from "react";
import classes from "./SideDrawer.css";

import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import auxWrapper from "../../../hoc/auxWrapper";
import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <auxWrapper>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </auxWrapper>
  );
};

export default sideDrawer;
