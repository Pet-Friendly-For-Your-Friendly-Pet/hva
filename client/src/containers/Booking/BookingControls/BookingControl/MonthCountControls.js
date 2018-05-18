import React from "react";
import classes from "./BookingControl.css";
import auxWrapper from "../../../../hoc/auxWrapper";

const MonthCountControl = props => (
  <auxWrapper className={classes.auxWrapper}>
    <div className={classes.BookingControl} />
    <div className={classes.CounterControl}>
      <h1>{props.horseCount}</h1>
      <div className={classes.Label}>Number of Months</div>
    </div>
  </auxWrapper>
);

export default MonthCountControl;
