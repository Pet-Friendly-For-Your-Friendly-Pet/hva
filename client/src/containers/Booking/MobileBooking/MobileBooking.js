import React, { Component } from "react";
import { reduxForm, Field, change } from "redux-form";
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
            name="mobileBookingDatePicker"
            change={change}
            component={MobileDatePicker}
          />
          {this.renderFields()}
          <button
            className={classes.MobileSubmitButton}
            type="submit"
            onClick={this.props.ordered}
          >
            <span>Submit</span>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "mobileBookingForm"
})(MobileBooking);
