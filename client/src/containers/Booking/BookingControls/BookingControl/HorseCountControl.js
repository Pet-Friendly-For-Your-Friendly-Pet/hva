import React from "react";
import classes from "./BookingControl.css";
import auxWrapper from "../../../../hoc/auxWrapper";

import FaPlusSquareO from "react-icons/lib/fa/plus-square-o";
import FaMinusSquareO from "react-icons/lib/fa/minus-square-o";

const horseCountControl = props => (
  <auxWrapper className={classes.auxWrapper}>
    <div className={classes.BookingControl}>
      <button onClick={props.removed} disabled={props.disabled}>
        <FaMinusSquareO className={classes.Less} />
      </button>
      <button onClick={props.added}>
        <FaPlusSquareO className={classes.More} />
      </button>
    </div>
    <div className={classes.CounterControl}>
      <h1>{props.horseCount}</h1>
      <div className={classes.Label}>Number of Horses</div>
    </div>
  </auxWrapper>
);

export default horseCountControl;
