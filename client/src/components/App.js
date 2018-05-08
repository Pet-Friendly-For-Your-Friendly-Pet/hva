import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./header/Header";

const Landing = () => <h2>Landing</h2>;
const About = () => <h2>About</h2>;

class App extends Component {
  state = {
    
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
