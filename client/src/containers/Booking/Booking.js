import React, { Component } from "react";

import auxWrapper from "./../../hoc/auxWrapper";

class Booking extends Component {
  render() {
    return (
      <auxWrapper>
        <div>A section to select how long of a stay</div>
        <div>Additional Booking options</div>
      </auxWrapper>
    );
  }
}

export default Booking;
