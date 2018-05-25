import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import MobileDatePicker from "./MobileDatePicker/MobileDatePicker";

class MobileBooking extends Component {
  render() {
    return (
      <div>
        <Field
          type="text"
          name="mobileBookingUserName"
          component={MobileDatePicker}
        />
      </div>
    );
  }
}

export default reduxForm({
  form: "mobileBookingForm"
})(MobileBooking);
