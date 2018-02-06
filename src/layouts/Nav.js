import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

export default class Nav extends Component {
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
        </ul>
      </nav>
    );
  }
}
