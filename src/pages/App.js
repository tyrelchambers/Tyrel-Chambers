import React, { Component } from 'react';
import './App.scss';

import Intro from '../sections/Intro.js';
import About from '../sections/About.js';
import Businesses from '../sections/Businesses.js';
import Youtube from '../sections/Youtube.js';
import InstagramFeed from '../sections/InstagramFeed.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
  }
  componentDidMount() {
    const visible = !this.state.visible;
    setTimeout(() => {
      this.setState({visible});
    }, 100);
  }

  render() {
    const { visible } = this.state;
    const pageVisible = visible ? "fade-enter-active" : "fade-enter"
  
    return (
      <div className={"wrapper fade-enter " + pageVisible}>
        
        <Intro/>
        <About/>
        <Businesses/>
        <Youtube/>
        <InstagramFeed/>
      </div>
    );
  }
}

export default App;