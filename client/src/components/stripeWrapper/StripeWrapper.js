import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../../actions";

import classes from "./StripeWrapper.css";

class StripeWrapper extends Component {
  render() {
    return (
      <StripeCheckout
        name="Hill View Arena"
        description="Arena Fees"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className={classes.checkoutBtn}>Checkout</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(StripeWrapper);
