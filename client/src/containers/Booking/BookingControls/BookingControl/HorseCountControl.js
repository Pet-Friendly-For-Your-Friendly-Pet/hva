import React from "react";
import classes from "./HorseCountControl.css";
import auxWrapper from "../../../../hoc/auxWrapper";

import FaPlusSquareO from "react-icons/lib/fa/plus-square-o";
import FaMinusSquareO from "react-icons/lib/fa/minus-square-o";
import FaDollar from "react-icons/lib/fa/dollar";

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
      <h1>
        {props.horseCount}{" "}
        <span className={classes.PriceBox}>
          <FaDollar />
          {props.horsePrice}{" "}
        </span>{" "}
      </h1>
      <div className={classes.Label}>Number of Horses</div>
    </div>
  </auxWrapper>
);

export default horseCountControl;
