import React from "react";
import classes from "./HomeContent.css";

import Circle from "./Circle/Circle";

const HomeContent = props => (
  <div className={classes.container}>
    <header>
      <h4>Hill View Arena</h4>
    </header>
    <main>
      <section className={classes.servicesRendered}>
        <div>
          <ul>
            <Circle />
            <Circle />
            <Circle />
          </ul>
        </div>
      </section>
    </main>
  </div>
);

export default HomeContent;
