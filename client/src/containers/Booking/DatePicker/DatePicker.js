import React, { Component } from "react";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

class DatePicker extends Component {
  static defaultProps = {
    numberOfMonths: 2
  };
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }
  getInitialState() {
    return {
      from: undefined,
      to: undefined
    };
  }
  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    // const rangeArray = range.toArray();
    // const dayCount = rangeArray.length;
    this.setState(range);
  }
  handleResetClick() {
    this.setState(this.getInitialState());
  }
  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="RangeExample">
        <p>
          {!from && !to && "When will you arrive?"}
          {from && !to && "When will you depart?"}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{" "}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Reset
              </button>
            )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <Helmet>
          <style>{`

          .DayPicker-Months {
            padding-left: 25px;
          }

          .RangeExample p {
            padding: 0;
            margin: 0;
            font-weight: lighter;
            text-align: center;
            justify-content: center;
            letter-spacing: 5px;
          }

          .link {
            color: black;
            outline: none;
            padding: 5px 10px;
            margin-top: 2%;
            font-size: 0.9em;
            font-family: inherit;
            background-color: transparent;
            font-weight: lighter;
            letter-spacing: 4px;
            border-top: none;
            border-right: none;
            border-left: none;
            transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;
          }

          .link:hover {
              color: white;
              cursor: pointer;
              background-color: rgb(218, 35, 35);
          }
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
        </Helmet>
      </div>
    );
  }
}

export default DatePicker;
