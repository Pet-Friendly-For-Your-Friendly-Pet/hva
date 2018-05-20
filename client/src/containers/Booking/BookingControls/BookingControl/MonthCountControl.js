import React from "react";
import classes from "./MonthCountControl.css";
import auxWrapper from "../../../../hoc/auxWrapper";

import FaDollar from "react-icons/lib/fa/dollar";

const MonthCountControl = props => (
  <auxWrapper className={classes.auxWrapperMonth}>
    <div className={classes.BookingControlMonth} />
    <div className={classes.CounterControlMonth}>
      <h1>
        {props.monthCount}{" "}
        <span className={classes.PriceBoxMonth}>
          <FaDollar />
          {props.monthPrice}{" "}
        </span>{" "}
      </h1>
      <div className={classes.LabelMonth}>Number of Months</div>
    </div>
  </auxWrapper>
);

export default MonthCountControl;
