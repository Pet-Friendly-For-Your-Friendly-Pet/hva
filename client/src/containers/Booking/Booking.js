import React, { Component } from "react";
import classes from "./Booking.css";

import AuxWrapper from "./../../hoc/auxWrapper";
import DatePicker from "../Booking/DatePicker/DatePicker";

class Booking extends Component {
  state = {};
  render() {
    return (
      <AuxWrapper>
        <div className={classes.Container}>
          <div className={classes.datePickerContainer}>
            <DatePicker />
          </div>
        </div>
      </AuxWrapper>
    );
  }
}

export default Booking;
