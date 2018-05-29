import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import classes from "./MobileBooking.css";
import MobileDatePicker from "./MobileDatePicker/MobileDatePicker";
import MobileHorseCountControl from "./MobileHorseCountControl/MobileHorseCountControl";
import MobileNotes from "./MobileNotes/MobileNotes";

class MobileBooking extends Component {
  renderFields() {
    return (
      <div>
        <Field
          label="Number Of Horses Boarding"
          type="number"
          name="mobileHorseCount"
          component={MobileHorseCountControl}
        />
        <Field
          label="Notes"
          type="text"
          name="mobileNotes"
          component={MobileNotes}
        />
      </div>
    );
  }
  render() {
    return (
      <div className={classes.MobileBookingContainer}>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          <Field
            type="date"
            value={this.props.numberOfMonths}
            name="mobileBookingDatePicker"
            component={MobileDatePicker}
          />
          {this.renderFields()}
          <button
            className={classes.MobileSubmitButton}
            type="submit"
            onClick={this.props.ordered}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "mobileBookingForm"
})(MobileBooking);
