import React, { Component } from 'react';
import './App.scss';

import Intro from '../../sections/Intro/Intro';
import About from '../../sections/About/About';
import Businesses from '../../sections/Businesses/Businesses';
import Youtube from '../../sections/Youtube/Youtube';
import InstagramFeed from '../../sections/InstagramFeed/InstagramFeed';

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