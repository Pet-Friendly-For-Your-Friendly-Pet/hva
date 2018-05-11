import React, { Component } from "react";
import PropTypes from "prop-types";
import DayPickerInput, { DateUtils } from "react-day-picker/DayPickerInput";

class DatePicker extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>
          a single line, side by side to from date picker (refer to notebook)
        </h1>
        <p>Please select or type a date</p>
        <DayPickerInput onDayChange={day => console.log(day)} />
      </div>
    );
  }
}

DatePicker.propTypes = {
  type: PropTypes.date
};

export default DatePicker;
