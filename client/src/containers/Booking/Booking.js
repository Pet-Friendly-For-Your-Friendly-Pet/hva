import React, { Component } from "react";
import classes from "./Booking.css";

import AuxWrapper from "./../../hoc/auxWrapper";
import DatePicker from "../Booking/DatePicker/DatePicker";
import Services from "../Services/Services";
import BookingControls from "./BookingControls/BookingControls";

const HORSE_PRICES = {
  oneHorse: 100.0,
  twoHorse: 150.0,
  threeHorse: 200.0
};

class Booking extends Component {
  state = {
    horseCount: 0,
    monthCount: 0,
    horsePrice: 0,
    monthPrice: 0
  };

  addHorseHandler = () => {
    const oldCount = this.state.horseCount;
    const updatedCount = oldCount + 1;
    this.setState({ horseCount: updatedCount });
  };

  removeHorseHandler = () => {};

  render() {
    return (
      <AuxWrapper>
        <div className={classes.Container}>
          <div className={classes.datePickerContainer}>
            <DatePicker monthCount={this.state.monthCount} />
            <BookingControls
              horseCount={this.state.horseCount}
              horseAdded={this.addHorseHandler}
            />
          </div>
          <Services />
        </div>
      </AuxWrapper>
    );
  }
}

export default Booking;
