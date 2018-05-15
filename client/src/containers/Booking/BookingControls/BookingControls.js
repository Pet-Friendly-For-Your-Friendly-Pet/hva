import React from "react";
import BookingControl from "./BookingControl/BookingControl";

import classes from "./BookingControls.css";
import AuxWrapper from "./../../../hoc/auxWrapper";

const controls = [{ label: "Horses" }];

const bookingControls = props => (
  <AuxWrapper>
    <div className={classes.BookingControls}>
      {controls.map(ctrl => (
        <BookingControl key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  </AuxWrapper>
);
export default bookingControls;
