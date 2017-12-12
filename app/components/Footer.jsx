// Footer.jsx

import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <div className="nav-footer">
        <ul className="animated fadeInUp nav-bar">
          <li><Link to="/experience">experience</Link></li>
        </ul>
      </div>
    );
  }
}

export default Footer;
