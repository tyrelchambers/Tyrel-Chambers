import React, { Component } from 'react';
import './About.scss'

export default class About extends Component {
  render() {
    return (
      <div className="about-section">
        <h1>Good Day!</h1>
        <h2 className="text-center">Hello, is it me you're looking for?</h2>
        <p>I'm a Full-Stack Rails Dev with an assortment of interests! I won't bore you with a list of things I like. But, here are a few: I enjoy hockey (go Flyers!), I enjoy playing video games, and I absolutely enjoying programming! Other than playing games or guitar, you can find me reading educational or thrilling books, uploading videos to my YouTube channel, <a href="https://www.youtube.com/c/storiesaftermidnight">Stories After Midnight</a>, or just generally hanging around.</p>
        <p>Here you can find resources that I like to use; websites that I use frequently. You'll also find books that I believe are incredibly beneficial to your success as a developer and person.</p>
      </div>
    );
  }
}