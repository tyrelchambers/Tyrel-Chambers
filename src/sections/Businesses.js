import React, { Component } from 'react';

import './Businesses.scss';

import keySparkImg from '../images/logo-wordmark-blue-500-svg.svg';
import ediscoImg from '../images/brain-title.png';
import armourCssImg from '../images/armourcss-banner.svg';

export default class Businesses extends Component {
  render() {
    return(
      <div className="business-wrapper container">
        <h2>Here are some things I've been involved with and/or own:</h2>
        <p>Some of these projects are still very much in the works, but nevertheless are projects I'm involved with</p>
        <ul className="business-list">

          <li className="keyspark business">
            <a href="http://www.keyspark.io" target="_blank" rel="noopener noreferrer" >
              <img src={keySparkImg} alt="KeySpark Logo"/> 
            </a>  
          </li>
          
          <li className="edisco business">
            <a href="https://www.edisco.org" target="_blank" rel="noopener noreferrer" >
              <img src={ediscoImg} alt="Edisco Logo"/>
            </a>
          </li>

          <li className="armourcss business">
            <a href="https://github.com/tyrelchambers/AmourCSS" target="_blank" rel="noopener noreferrer" >
              <img src={armourCssImg} alt="ArmourCSS Logo"/>
            </a>
          </li>

          <li className="alpen-west business">
            <a href="#" target="_blank" rel="noopener noreferrer" >
              <h1>Alpen West</h1>
            </a>
          </li>

        </ul>
      </div>
    );
  }
}