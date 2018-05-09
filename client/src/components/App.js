import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <p>test</p>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
