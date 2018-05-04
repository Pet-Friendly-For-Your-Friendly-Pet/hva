import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <a>Hill View Arena</a>
          <Link to={About}>About</Link>
        </div>
      </div>
    );
  }
}

export default Header;
