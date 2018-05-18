import React from "react";
import classes from "./BookingControl.css";
import auxWrapper from "../../../../hoc/auxWrapper";

import FaPlusSquareO from "react-icons/lib/fa/plus-square-o";
import FaMinusSquareO from "react-icons/lib/fa/minus-square-o";

const bookingControl = props => (
  <auxWrapper className={classes.auxWrapper}>
    <div className={classes.BookingControl}>
      <button>
        <FaPlusSquareO className={classes.More} />
      </button>
      <button>
        <FaMinusSquareO className={classes.Less} />
      </button>
    </div>
    <div className={classes.CounterControl}>
      <h1>{props.horseCount}</h1>
      <div className={classes.Label}>Number of {props.label}</div>
    </div>
  </auxWrapper>
);

export default bookingControl;
