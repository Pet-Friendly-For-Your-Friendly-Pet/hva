import React from "react";
import classes from "./MobileNotes.css";

export default ({ input, label }) => {
  //es6 destructuring to pull out just the .input of the props
  //passing this object to the input down below to have access to the input object
  return (
    <div className={classes.mobileBookingFieldContainer}>
      <div className={classes.labelContainer}>
        <label>{label}</label>
      </div>
      <div className={classes.inputContainer}>
        <input
          placeholder="Anything you'd like us to know?"
          type="text"
          style={{
            width: "100%",
            paddingTop: "30px",
            fontSize: "12px",
            backgroundColor: "rgba(242, 242, 242, .2)",
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            fontWeight: "lighter"
          }}
          {...input}
        />
      </div>
    </div>
  );
};
