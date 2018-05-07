import React, { Component } from "react";
import { connect } from "react-redux";

import StripeWrapper from "../stripeWrapper/StripeWrapper";

class Header extends Component {
  render() {
    return (
      <div>
        <a> Hill View Arena </a>
        <StripeWrapper />
      </div>
    );
  }
}

export default Header;
