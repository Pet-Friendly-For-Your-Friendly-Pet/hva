import React, { Component } from "react";
import classes from "./Home.css";

import Gallery from "./Gallery/Gallery";
import HomeContent from "./HomeContent/HomeContent";
import Footer from "../../components/Footer/Footer";

class Home extends Component {
  state = {};
  //Add methods below, above render()

  render() {
    return (
      <div className={classes.container}>
        <main>
          <Gallery />
          <HomeContent />
          <Footer />
        </main>
      </div>
    );
  }
}

export default Home;
