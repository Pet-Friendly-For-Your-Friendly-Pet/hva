import React from "react";

import classes from "./BookingControls.css";
import AuxWrapper from "./../../../hoc/auxWrapper";
import HorseCountControl from "./BookingControl/HorseCountControl";
import MonthCountControl from "./BookingControl/MonthCountControl";

const bookingControls = props => (
  <AuxWrapper>
    <div className={classes.Headers}>
      <h1 className={classes.Header}>Boarding</h1>
      <h1 className={classes.HeaderTwo}>Duration</h1>
    </div>
    <div className={classes.BookingControls}>
      <HorseCountControl
        horseCount={props.horseCount}
        horsePrice={props.horsePrice}
        added={props.horseAdded}
        removed={props.horseRemoved}
        disabled={props.disabled.horseCount}
      />
      <MonthCountControl
        monthCount={props.monthCount}
        monthPrice={props.monthPrice}
        boarding={props.boarding}
        boardingTotal={props.boardingTotal}
      />
    </div>
    <div className={classes.totalPriceContainer}>
      <span className={classes.totalPrice}>
        Total Price:
        <span>{props.totalPrice}</span>
      </span>
    </div>
    <div className={classes.orderButtonContainer}>
      <button className={classes.OrderButton} onClick={props.ordered}>
        Continue
      </button>
    </div>
  </AuxWrapper>
);
export default bookingControls;
