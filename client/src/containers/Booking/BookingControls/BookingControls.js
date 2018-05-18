import React from "react";

import classes from "./BookingControls.css";
import AuxWrapper from "./../../../hoc/auxWrapper";
import HorseCountControl from "./BookingControl/HorseCountControl";

const bookingControls = props => (
  <AuxWrapper>
    <div className={classes.BookingControls}>
      <HorseCountControl
        horseCount={props.horseCount}
        added={props.horseAdded}
      />
    </div>
  </AuxWrapper>
);
export default bookingControls;
