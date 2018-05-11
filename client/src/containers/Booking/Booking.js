import React, { Component } from "react";
import classes from "./Booking.css";

import AuxWrapper from "./../../hoc/AuxWrapper";
import DatePicker from "../Booking/DatePicker/DatePicker";

class Booking extends Component {
  state = {};
  render() {
    return (
      <AuxWrapper>
        <div className={classes.Container}>
          <div>A section to select how long of a stay</div>
          <DatePicker />
          <div>Additional Booking options</div>
        </div>
      </AuxWrapper>
    );
  }
}

export default Booking;
