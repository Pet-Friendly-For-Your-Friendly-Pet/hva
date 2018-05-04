import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

class StripeWrapper extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={token => console.log(token)}
        stripeKey={REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
