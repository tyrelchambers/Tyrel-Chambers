import React, { Component } from 'react';
import './Header.scss';

import Navbar from './Nav';
import Social from './Social';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Navbar/>
        <Social/>
      </header>
    );
  }
}

export default Header;