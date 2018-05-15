import React, { Component } from "react";
import classes from "./Booking.css";

import AuxWrapper from "./../../hoc/auxWrapper";
import DatePicker from "../Booking/DatePicker/DatePicker";
import Services from "../Services/Services";
import BookingControls from "./BookingControls/BookingControls";

class Booking extends Component {
  state = {
    horseCount: 0,
    monthCount: 0,
    price: 0
  };
  render() {
    return (
      <AuxWrapper>
        <div className={classes.Container}>
          <div className={classes.datePickerContainer}>
            <DatePicker monthCount={this.state.monthCount} />
            <BookingControls />
          </div>
          <Services />
        </div>
      </AuxWrapper>
    );
  }
}

export default Booking;
