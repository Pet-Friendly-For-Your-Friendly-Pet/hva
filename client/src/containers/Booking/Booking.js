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
    boarding: false,
    boardingTotal: 0,
    arenaRiding: false,
    arenaRidingTotal: 0,
    horseCount: 0,
    horsePrice: 0,
    monthCount: 0,
    monthPrice: 0,
    totalPrice: 0
  };

  addHorseHandler = () => {
    let oldCount = this.state.horseCount;
    let oldhorsePrice = this.state.horsePrice;
    let oldBoardingTotal = this.state.boardingTotal;
    let updatedCount = oldCount + 1;
    let updatedHorsePrice;
    this.setState({ horseCount: updatedCount });
  };

  removeHorseHandler = () => {
    let oldCount = this.state.horseCount;
    let oldhorsePrice = this.state.horsePrice;
    let oldBoardingTotal = this.state.boardingTotal;
    let updatedCount = oldCount - 1;
    let updatedHorsePrice = this.state.horsePrice;
    this.setState({ horseCount: updatedCount });
  };

  render() {
    const disabled = {
      ...this.state
    };
    if (disabled.horseCount === 0) {
      disabled.horseCount = true;
    } else {
      disabled.horseCount = false;
    }
    return (
      <AuxWrapper className={classes.auxContainer}>
        <div className={classes.Container}>
          <div className={classes.datePickerContainer}>
            <DatePicker monthCount={this.state.monthCount} />
            <BookingControls
              horseAdded={this.addHorseHandler}
              horseCount={this.state.horseCount}
              horsePrice={this.state.horsePrice}
              horseRemoved={this.removeHorseHandler}
              disabled={disabled}
              monthCount={this.state.monthCount}
              monthPrice={this.state.monthPrice}
              boarding={this.state.boarding}
              boardingTotal={this.state.boardingTotal}
              totalPrice={this.state.totalPrice}
            />
          </div>
          <Services />
        </div>
      </AuxWrapper>
    );
  }
}

export default Booking;
