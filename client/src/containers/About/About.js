import React, { Component } from "react";
import classes from "./About.css";

import Footer from "../../components/Footer/Footer";

class About extends Component {
  state = {};
  //Add methods below, above render()

  render() {
    return (
      <div className={classes.container}>
        <div className={classes.contentContainer}>
          <div className={classes.header}>
            <h1>About Hill View Arena</h1>
          </div>
          <div>
            <p>
              Like most girls, my passion for horses started at a young age, but
              didn't really become an addiction until about 10 years ago! That
              is when I was introduced to the sport of reining and was
              absolutely captivated from the moment I tried it. Today, I have
              two reining horses that are being shown. My horse addiction, as I
              call it, is actually the best therapy anything can provide and I
              find solitude and peace everytime I am around these magnificent
              animals.
            </p>
            <p>
              Living in Montana and dealing with our climate makes it difficult
              to keep your horses in shape and legged up year round so in 2017 I
              finally took a leap of faith and decided it was time to build my
              own indoor riding arena, so I couldn't make any more excuses not
              to ride. Now, I want to be able to share my wonderful indoor and
              outdoor space with ALL horse enthusiasts. In addition to the
              indoor and outdoor arenas, I also have boarding space available. I
              am currently taking reservations for boarding available June 1,
              2018. Venture out to the North Helena Valley - just a short jaunt
              from I-15 and take advantage of riding in our indoor and outdoor
              arenas. Keep your equine friends legged up all year round so
              they’re ready to hit the trails or compete in your event of
              choice!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
