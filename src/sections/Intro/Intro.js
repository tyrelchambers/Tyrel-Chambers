import React, { Component } from 'react';
import './Intro.scss';
import $ from 'jquery';
import '../../colours.scss';

export default class Intro extends Component {
  constructor() {
    super()
    this.state = {
      timeOfDay: new Date().getHours()
    }
  }



  setTimeOfDay = (state) => {
    let hour;

    if(state >= 0 && state < 12) {
      hour = "Morning";

    } else if(state >= 12 && state < 17) {
      hour = "Afternoon";

    } else if(state >= 17 && state < 20) {
      hour = "Evening";

    } else if(state >= 20 && state < 24) {
      hour = "Night";
    }

    return hour;
  }



  render() {
    return (
      <div className="intro" id="intro">
        <h1 id="greeting">Good {this.setTimeOfDay(this.state.timeOfDay)}!</h1>
        <div className="scroll-lines">
          <span className="scroll-line"></span>
          <span className="scroll-line"></span>
          <span className="scroll-line"></span>
        </div>
      </div>
    );
  }
}