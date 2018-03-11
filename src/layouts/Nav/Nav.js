import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

import './Nav.scss';

export default class Nav extends Component {
  componentDidMount() {
    $('.mobile-nav-toggle').on('click', () => {
      $('.toggle-circle').toggleClass('toggle-circle-open');
      $('.mobile-navbar').toggleClass('visible');
    });
  }
  removeNav() {
    $('.mobile-navbar').removeClass('visible');
  }

  removeToggleCircle() {
    $('.mobile-nav-toggle').removeClass('toggle-circle-open');
  }
  handleLinkClick() {
    this.removeNav();
    this.removeToggleCircle();
  }
  render() {
    return (
      <nav>
        <ul className="navbar">
          <li>
            <NavLink exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/about">About</NavLink>
          </li>
          <li>
            <NavLink exact to="/resources">Resources</NavLink>
          </li>
          <li>
            <NavLink exact to="/css-cheat-sheet">CSS Cheat Sheet</NavLink>
          </li>
        </ul>

        <ul className="mobile-navbar">
          <li>
            <NavLink exact to="/" onClick={this.handleLinkClick}>Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/about" onClick={this.handleLinkClick}>About</NavLink>
          </li>
          <li>
            <NavLink exact to="/resources" onClick={this.handleLinkClick}>Resources</NavLink>
          </li>
          <li>
            <NavLink exact to="/css-cheat-sheet" onClick={this.handleLinkClick}>CSS Cheat Sheet</NavLink>
          </li>
        </ul>

        <div className="mobile-nav-toggle">
          <div className="toggle-circle"></div>

        </div>
      </nav>
    );
  }
}
