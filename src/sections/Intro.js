import React, { Component } from 'react';
import './Intro.scss';
import $ from 'jquery';

export default class Intro extends Component {

  componentDidMount() {
    this.parallax();
  }

  parallax() {
    var currentMousePos = { x: 0, y: 0};

    $('.intro').mousemove((e) => {
      currentMousePos.x = e.pageX;
      currentMousePos.y = e.pageY;
    
      $('.intro').css('background-position', currentMousePos.x / 30 + "% " + currentMousePos.y / 60 + "%");
    });
    
  }

  render() {
    return (
      <div className="intro" id="intro">
        <h1>Tyrel Chambers</h1>
        <p>A Full-Stack Rails Dev trying to make his way in the world. Through this site, my <a href="https://medium.com/@tyrel.chambers">Medium</a> posts and other works, I intend and am passionate about helping devs become better programmers and people. I may not know it all, but I have a passion and a desire to see you succeed.</p>
        <div className="scroll-lines">
          <span className="scroll-line"></span>
          <span className="scroll-line"></span>
          <span className="scroll-line"></span>
        </div>
      </div>
    );
  }
}