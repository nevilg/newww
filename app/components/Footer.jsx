// Footer.jsx

import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <footer className="nav-footer">
        <ul className="animated fadeInUp nav-bar">
          <li><Link to="/">home</Link></li>
          <li><Link to="/experience">experience</Link></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
