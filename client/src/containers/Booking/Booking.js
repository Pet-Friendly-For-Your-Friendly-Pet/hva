import React, { Component } from "react";
import classes from "./Booking.css";

import AuxWrapper from "./../../hoc/auxWrapper";
import Modal from "../../components/UI/Modal/Modal";
import DatePicker from "../Booking/DatePicker/DatePicker";
import Services from "../Services/Services";
import BookingControls from "./BookingControls/BookingControls";
import OrderSummary from "./OrderSummary/OrderSummary";

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
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    purchased: false
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

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  completedPurchaseHandler = () => {
    this.setState({ purchased: true });
    //put loading spinner in here
    //push to thank you UI page
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
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
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            boarding={this.state.boarding}
            boardingTotal={this.state.boardingTotal}
            horsePrice={this.state.horsePrice}
            horseCount={this.state.horseCount}
            monthPrice={this.state.monthPrice}
            monthCount={this.state.monthCount}
            arenaRiding={this.state.arenaRiding}
            arenaRidingTotal={this.state.arenaRidingTotal}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseCompleted={this.completedPurchaseHandler}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
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
              ordered={this.purchaseHandler}
              purchasable={this.state.purchasable}
            />
          </div>
          <Services />
        </div>
      </AuxWrapper>
    );
  }
}

export default Booking;
