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
    this.updateDayCount = this.updateDayCount.bind(this);
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

  updateDayCount(from, to) {
    const oneDay = 1000 * 60 * 60 * 24;
    let dateOneMS = Date.parse(from);
    let dateTwoMS = Date.parse(to);
    let differenceMS = dateTwoMS - dateOneMS;
    let calculatedDayCount = Math.round(differenceMS / oneDay);
    this.setState({ dayCount: calculatedDayCount });
    this.props.change(this.props.input.dayCount, this.state.dayCount);
    console.log(this.state.dayCount);
  }

  handleFromChange(from) {
    // Change the from date and focus the "to" input field
    this.setState({ from });
  }

  handleToChange(to) {
    this.setState({ to }, this.showFromMonth);
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
              onToDateChange={this.updateDayCount}
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
            <p className="InputFromTo-FromTo">
              <span>
                {!from && !to && "When will you arrive?"}
                {from && !to && "When will you depart?"}
                {from &&
                  to &&
                  `Boarding from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{" "}
              </span>
              <span className="monthCount">
                Duration of Stay: <em>{this.state.dayCount} Months</em>
              </span>
            </p>
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
    flex-wrap: wrap;
    padding-bottom: 10px;
  }
  
  .InputFromTo .calendarIcon {
    padding: 5px 5px 5px 5px;
    font-size: 48px;
  }

  .monthCount {
    display: block;
    padding-top: 5px;
    font-size: .8em;
  }

  .DayPickerInput {
    padding-bottom: 10px;
  }

  .DayPickerInput input {
    font-size: 20px;
    padding: 5px 5px -5px 5px;
    border-top: none;
    border-left: none;
    border-right: none;
    font-weight: lighter;
    padding-right: 120px
  }

  .InputFromTo-FromTo {
    font-size: .9em;
    text-align: center;
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

  @media only screen and (min-width: 768px) and (max-device-width: 1024px) {
  .InputFromTo-to {
    padding-right: 0px;
  }

  .InputFromTo-FromTo {
    font-size: .9em;
    text-align: left;
    padding-left: 5px;
    font-size: .8em;
    text-align: left;
    margin-top: 50px;
  }

  .InputFromTo-FromTo p span {
    letter-spacing: 4px;
  }

  .monthCount {
    letter-spacing: 3.3px;
  }

  .DayPickerInput {
    padding: 0px;
  }

  .InputFromTo {
    align-items: flex-start;
    padding-bottom: 0;
  }
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
