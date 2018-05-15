import React from "react";
import classes from "./BookingControl.css";

import FaPlusSquareO from "react-icons/lib/fa/plus-square-o";
import FaMinusSquareO from "react-icons/lib/fa/minus-square-o";

const bookingControl = props => (
  <div className={classes.BookingControl}>
    <button>
      <FaPlusSquareO className={classes.More} />
    </button>
    <button>
      <FaMinusSquareO className={classes.Less} />
    </button>
    <div className={classes.Label}>Number of {props.label}</div>
  </div>
);

export default bookingControl;
