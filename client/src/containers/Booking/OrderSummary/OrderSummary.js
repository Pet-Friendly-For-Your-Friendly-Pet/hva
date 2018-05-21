import React from "react";

import classes from "./OrderSummary.css";
import auxWrapper from "../../../hoc/auxWrapper";
import StripeWrapper from "../../stripeWrapper/StripeWrapper";
import Button from "../../../components/UI/Button/Button";

const orderSummary = props => {
  const willBeBoarding = props.boarding ? "Yes" : "No";
  const arenaRiding = props.arenaRiding ? "Yes" : "No";
  const reviewHorseCount = props.horseCount;
  const reviewMonthCount = props.monthCount;
  const reviewMonthPrice = props.monthPrice;
  const reviewHorsePrice = props.horsePrice;
  const reviewBoardingTotal = props.boardingTotal;
  const reviewRidingTotal = props.arenaRidingTotal;
  return (
    <auxWrapper className={classes.listReviewContainer}>
      <div className={classes.listReviewHeader}>
        <h3> Review </h3>
        <p>Please review your order</p>
      </div>
      <div className={classes.reviewListContainer}>
        <div className={classes.reviewListOne}>
          <ul>
            <li>Boarding:</li>
            <li>Duration of Stay:</li>
            <li>Number of Horses:</li>
            <li style={{ borderBottom: "1px solid black", width: "124%" }} />
            <li style={{ fontSize: "1.2em" }}>Boarding Total</li>
          </ul>
          <ul>
            <li>Open Arena Riding:</li>
            <li>Number of Horses:</li>
            <li style={{ width: "70%" }}>Reservation Duration:</li>
            <li style={{ borderBottom: "1px solid black", width: "124%" }} />
            <li style={{ fontSize: "1.2em" }}>Open Riding Total</li>
          </ul>
        </div>
        <div className={classes.reviewListTwo}>
          <ul>
            <li>
              <span>{willBeBoarding}</span>
            </li>
            <li>
              <span>{reviewMonthCount}</span>
            </li>
            <li>
              <span>{reviewHorseCount}</span>
            </li>
            <li style={{ borderBottom: "1px solid transparent" }} />
            <li>
              <span style={{ fontSize: "1.2em" }}>{reviewBoardingTotal}</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>{arenaRiding}</span>
            </li>
            <li>
              <span>{reviewHorseCount}</span>
            </li>
            <li>
              <span>{reviewMonthCount}</span>
            </li>
            <li style={{ borderBottom: "1px solid transparent" }}>
              <span />
            </li>
            <li>
              <span style={{ fontSize: "1.2em" }}>{reviewRidingTotal}</span>
            </li>
            <li style={{ borderBottom: "1px solid transparent" }} />
          </ul>
        </div>
      </div>
      <div className={classes.listReviewFooter}>
        <div>
          <Button clicked={props.purchaseCancelled} btnType="Cancel">
            Cancel
          </Button>
          <StripeWrapper />
        </div>
      </div>
    </auxWrapper>
  );
};

export default orderSummary;
