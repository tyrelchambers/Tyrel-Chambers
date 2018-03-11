import React, { Component } from 'react';
import './Header.scss';

import Navbar from '../Nav/Nav';
import Social from '../Social/Social';

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