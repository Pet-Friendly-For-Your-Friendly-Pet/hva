import React from "react";

import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/">Home</NavigationItem>
    <NavigationItem link="/about">About</NavigationItem>
    <NavigationItem link="/booking">Booking</NavigationItem>
  </ul>
);

export default navigationItems;
