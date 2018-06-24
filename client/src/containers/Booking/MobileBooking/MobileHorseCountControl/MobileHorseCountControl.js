import React from "react";
import classes from "./MobileHorseCountControl.css";

export default ({ input, label, values, onChange }) => {
  //es6 destructuring to pull out just the .input of the props
  //passing this object to the input down below to have access to the input object
  return (
    <div className={classes.mobileBookingFieldContainer}>
      <div className={classes.labelContainer}>
        <label>{label}</label>
      </div>
      <div className={classes.inputContainer}>
        <input
          placeholder="No more than 3"
          type="number"
          min="0"
          style={{
            width: "100%",
            color: "black",
            paddingTop: "10px",
            fontSize: ".8em",
            backgroundColor: "rgb(242,242,242,.3)",
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            fontWeight: "lighter",
            fontSize: "12px",
            paddingTop: "9px",
            height: "15px"
          }}
          {...input}
        />
      </div>
    </div>
  );
};
