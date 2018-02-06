import React, { Component } from 'react';

import './Social.scss';
import snapImg from '../images/IMG_0616.JPG';

export default class Social extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
    };
  }

  toggleModal() {
    const visible = !this.state.visible;
    this.setState({visible});
  }

  render() {
    const { visible } = this.state;
    const snapClass = visible ? "visible" : "";
    return(
      <div className="socials">
        <ul>
          <li>
            <a href="https://www.instagram.com/chambers43/">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Chambers43">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://medium.com/@tyrel.chambers">
              <i className="fab fa-medium-m"></i>
            </a>
          </li>
          <li id="snapchat" onClick={this.toggleModal.bind(this)}>
            <i className="fab fa-snapchat-ghost"></i>
          </li>
          <li>
            <a href="https://github.com/tyrelchambers">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a href="http://www.alightthought.com/">
              <i className="fas fa-podcast"></i>
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/tychambers95e9">
              <i className="fab fa-behance"></i>
            </a>
          </li>
        </ul>
        <div className={"snapchat-modal " + snapClass}>     
          <span id="closeSnapModal" onClick={this.toggleModal.bind(this)}>
            <i className="fas fa-times"></i>
          </span>  
          <img src={snapImg} alt="SnapCode" />
          <span id="modalTimer"></span>
        </div>
      </div>
    );
  }
}