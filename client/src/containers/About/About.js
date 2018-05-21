import React, { Component } from "react";
import classes from "./About.css";

import Footer from "../../components/Footer/Footer";

class About extends Component {
  state = {};
  //Add methods below, above render()

  render() {
    return (
      <div className={classes.container}>
        <div>
          <h1>About Hill View Arena</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
