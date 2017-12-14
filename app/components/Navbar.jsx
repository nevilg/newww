// Navbar.jsx

import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-navbar">
        <ul className="animated fadeInUp nav-bar">
          <li><Link to="/experience">experience</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
