import React, { Component } from "react";
import classes from "./Schedule.css";

import Calendar from "./Calendar/Calendar";

class Schedule extends Component {
  state = {};
  //Add methods below, above render()

  render() {
    return (
      <div>
        <main>
          <Calendar />
        </main>
      </div>
    );
  }
}

export default Schedule;
