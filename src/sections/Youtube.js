import React, { Component } from 'react';

import './Youtube.scss';


export default class Youtube extends Component {

  render() {
    return (
      <div className="container">
        <div className="youtube">
          <div className="youtube-img"></div>
          <div className="youtube-desc">
            <h2 className="loud-title text-center">Youtube</h2>
            <p className="text-center" >In my spare time I read chilling stories found on Reddit, with author's permission of course. I really enjoy this past time and it seems that others do as well! If you want something</p>
            <a className="btn" href="https://www.youtube.com/c/storiesaftermidnight" target="_blank" rel="noopener noreferrer">View Stories After Midnight</a>
          </div>
        </div>
        <div className="youtube-videos">
          <iframe width="400" height="225" src="https://www.youtube.com/embed/K9EeCL1MsK8" frameBorder="0" allow="encrypted-media" allowFullScreen key="1" title="What Happens When You Write To Satan Instead of Santa"></iframe>
          <iframe width="400" height="225" src="https://www.youtube.com/embed/VBprXwi8QNc" frameBorder="0" allow="encrypted-media" allowFullScreen key="2" title="The Part of the Deep Web We Aren't Supposed to See"></iframe>
          <iframe width="400" height="225" src="https://www.youtube.com/embed/hNme67x5PTk" frameBorder="0" allow="encrypted-media" allowFullScreen key="3" title="I Cannot Explain What I Witnessed in the Emergency Room"></iframe>
        </div>
      </div>
    );
  }
}