import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Booking from "./containers/Booking/Booking";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Booking />
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
