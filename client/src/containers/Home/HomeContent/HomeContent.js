import React from "react";
import classes from "./HomeContent.css";

import Circle from "./Circle/Circle";

const HomeContent = props => (
  <div className={classes.container}>
    <main>
      <div className={classes.headerContainer}>
        <h4>Hill View Arena</h4>
      </div>
      <div className={classes.servicesRendered}>
        <ul>
          <Circle />
          <Circle />
          <Circle />
        </ul>
      </div>
    </main>
  </div>
);

export default HomeContent;
