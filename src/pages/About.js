import React, { Component } from 'react'
import './About.scss';
import selfie from '../images/selfie.jpg';

export default class About extends Component {
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
    }, 100)
  }

  render() {
    const { visible } = this.state;
    const pageVisible = visible ? "fade-enter-active" : "fade-enter"
    return(
      <div className={"about container fade-enter " + pageVisible}>
        <h2 className="loud-title text-center">About This Guy on the Internet</h2>
        <img src={selfie} alt="Me and my dad"/>
        <p>Back in about 2013, my dad asked me to help him create a site for a mutual friend. Prior to this, my only programming knowledge came in high school which was about 7 year earlier; needless to say, I was rusty. The project eventually fell through, however my passion in this new found craft, didn't. Since then I have been teaching myself how to be a web developer, but now more specifically, a Full Stack Developer.</p>
        <p>My dream is to be an entrepreneur (right now a wantrepreneur) building projects that I love and businesses I am passionate about. I am currently the Co-Founder and CEO of <a href="http://www.keyspark.io">KeySpark</a>.</p>
        <p>I am even more passionate about helping people reach their goals, but not only that, being the journey to reach their goals. I desire to help young developers begin their way to the developer life. I began a podcast called Grow Your Code to do just that, however being more on the younger side in my career, I backed myself into a corner with the limited knowledge I had and the narrow scope of the podcast. I am still very much on my way and still to a degree a junior to intermediate level developer. Despite my lack of knowledge, I care(d) so deeply about people beginning the road to reaching their goals that I started the aforementioned podcast to help people start moving. However, it was moreso for talking about "soft skills".</p>

        <h4 className="text-center">My Long Term Goals</h4>
        <p>On this day, February 3rd, 2018, I have decided to document my journey, build more apps, start more podcasts and do more productive things. Despite my lack of knowledge, I have a burning passion for success in others and I hope to share this passion through all my future projects.</p>
        <p>A huge part of this journey and another one of my big goals is to build my personal brand over the years. You can find me on Instagram, Twitter, Medium, and Snapchat all of which you can find up above at the top of your screen.</p>
      </div>
    );
  }
}