import React from "react";
import classes from "./Modal.css";

import auxWrapper from "../../../hoc/auxWrapper";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => (
  <auxWrapper>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </auxWrapper>
);

export default modal;
