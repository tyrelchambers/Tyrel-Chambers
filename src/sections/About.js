import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './About.scss'
import tcLogo from '../images/tc-logo.svg';

export default class About extends Component {
  render() {
    return (
      <div className="about-section">
        <img src={tcLogo} alt="TC Logo"/>
        <h1>Good Day!</h1>
        <h2 className="text-center">Hello, is it me you're looking for?</h2>
        <p>I'm a <NavLink exact to="/about">Full-Stack Rails Dev</NavLink> with an assortment of interests! I won't bore you with a list of things I like. But, here are a few: I enjoy hockey (go Flyers!), I enjoy playing video games, and I absolutely enjoying programming! Other than playing games or guitar, you can find me reading educational or thrilling books, uploading videos to my YouTube channel, <a href="https://www.youtube.com/c/storiesaftermidnight">Stories After Midnight</a>, or just generally hanging around.</p>
        <p>Here you can find resources that I like to use; websites that I use frequently. You'll also find <NavLink exact to="/resources">books that I believe are incredibly beneficial</NavLink> to your success as a developer and person. I also created a <NavLink exact to="/css-cheat-sheet">CSS cheat sheet</NavLink> that will hopefully help you get better at CSS through quick glances and practice.</p>
      </div>
    );
  }
}