import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";

import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Booking from "./containers/Booking/Booking";
import Schedule from "./containers/Schedule/Shedule";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/booking" component={Booking} />
            <Route path="/schedule" component={Schedule} />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// <Route path="/" exact component={Home} />
