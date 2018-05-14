import React from "react";
import classes from "./Fees.css";

import FaHome from "react-icons/lib/fa/home";

const Fees = props => {
  return (
    <div className={classes.container}>
      <h4 className={classes.header}>Fees</h4>
      <div className={classes.pricingContainer}>
        <section className={classes.priceBox}>
          <h3>
            <FaHome /> Boarding
          </h3>
          <ul>
            <li>
              <p>
                Board (<strong>per horse / per month</strong>) - $325.00/Month
              </p>
            </li>
            <li>
              <p>
                <small>
                  <em>* Minimum 3 month commitment *</em>
                </small>
              </p>
            </li>
          </ul>
          <hr />
          <h3>Monthly Open Arena Riding</h3>
          <ul>
            <li>
              <p>One Horse - $100.00/Month</p>
            </li>
            <li>
              <p>Two Horses - $150.00/Month</p>
            </li>
            <li>
              <p>Three Horses - $200.00/Month</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Fees;
