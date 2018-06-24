import React, { Component } from "react";
import classes from "./Home.css";

import Gallery from "./Gallery/Gallery";
import HomeContent from "./HomeContent/HomeContent";
import Footer from "../../components/Footer/Footer";
import AuxWrapper from "../../hoc/auxWrapper";
class Home extends Component {
  state = {};
  //Add methods below, above render()

  render() {
    return (
      <AuxWrapper className={classes.container}>
        <div className={classes.galleryContainer}>
          <main>
            <Gallery />
          </main>
        </div>
        <div>
          <HomeContent />
        </div>
        <footer className={classes.homeFooter}>
          <Footer />
        </footer>
      </AuxWrapper>
    );
  }
}

export default Home;
