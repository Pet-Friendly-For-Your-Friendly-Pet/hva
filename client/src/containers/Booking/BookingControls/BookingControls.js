import React from "react";
import BookingControl from "./BookingControl/BookingControl";

import classes from "./BookingControls.css";

const controls = [{ label: "Horses" }];

const bookingControls = props => (
  <div className={classes.BookingControls}>
    {controls.map(ctrl => (
      <BookingControl key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
);
export default bookingControls;
