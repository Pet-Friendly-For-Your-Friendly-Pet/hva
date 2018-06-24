import React from "react";
import classes from "./Circle.css";

const Circle = () => {
  return (
    <div>
      <span className={`${classes.circle} ${classes.black}`} />
    </div>
  );
};

export default Circle;
