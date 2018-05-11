import React, { Component } from "react";
import classes from "./Booking.css";

import AuxWrapper from "./../../hoc/AuxWrapper";
import DatePicker from "../../containers/DatePicker/DatePicker";

class Booking extends Component {
  state = {
    dates: {
      from: new.Date(),
      to: new.Date()
    }
  }
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
