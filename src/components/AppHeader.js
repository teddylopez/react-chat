import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './../styles/header.css';

class AppHeader extends Component {
  render() {
    return (
      <header>
        <Link to='/' id="logo">chatted</Link>
        <nav className="clearfix">
          <Link to='#'>About</Link>
          <Link to='#'>Library</Link>
        </nav>
      </header>
    );
  }
}

export default AppHeader
