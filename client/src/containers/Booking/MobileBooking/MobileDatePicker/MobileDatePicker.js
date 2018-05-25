import React, { Component } from "react";
import Helmet from "react-helmet";
import moment from "moment";
import PropTypes from "prop-types";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import FaCalendar from "react-icons/lib/fa/calendar";

import classes from "./MobileDatePicker.css";

class MobileDatePicker extends Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: undefined,
      to: undefined,
      dayCount: 0
    };
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
  focusTo() {
    // Focus to `to` field. A timeout is required here because the overlays
    // already set timeouts to work well with input fields
    this.timeout = setTimeout(() => this.to.getInput().focus(), 0);
  }
  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), "months") < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }
  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
    console.log(from);
  }
  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
    console.log(to);
  }
  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className={classes.DatePickerContainer}>
        <div className="InputFromTo">
          <DayPickerInput
            value={from}
            placeholder="From"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { after: to },
              toMonth: to,
              modifiers,
              numberOfMonths: 1,
              onDayClick: () => this.to.getInput().focus()
            }}
            onDayChange={this.handleFromChange}
          />{" "}
          <FaCalendar className="calendarIcon" />{" "}
          <span className="InputFromTo-to">
            <DayPickerInput
              ref={el => (this.to = el)}
              value={to}
              placeholder="To"
              format="LL"
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                selectedDays: [from, { from, to }],
                disabledDays: { before: from },
                modifiers,
                month: from,
                fromMonth: from,
                numberOfMonths: 1
              }}
              onDayChange={this.handleToChange}
            />
          </span>
          <Helmet>
            <style>{`
 
    .InputFromTo {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
    font-weight: lighter;
  }
  .InputFromTo .calendarIcon {
    padding: 15px;
  }
  .DayPickerInput input {
    font-size: 20px;
    padding: 5px 5px -5px 5px;
    border-top: none;
    border-left: none;
    border-right: none;
    font-weight: lighter;
    letter-spacing: 16.3px;
    padding-right: 120px
  }
  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .InputFromTo-to {
    padding-right: 11.5px;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .InputFromTo .DayPickerInput-Overlay {
    width: 312px;
  }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left: -24px;
  }
`}</style>
          </Helmet>
        </div>
      </div>
    );
  }
}

MobileDatePicker.propTypes = {};

export default MobileDatePicker;
