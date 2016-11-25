// Intro.jsx

import React from 'react';

class Intro extends React.Component {
  render() {
    return (
      <div className="col-md-12 intro-text">
        <h1 className="animated fadeInDown">nevil george</h1>
        <h3>computer science at northwestern university</h3>
        <h3>software engineering at uber</h3>

        <div className="icons">
            <a href="http://linkedin.com/in/nevilgeorge" target="_blank"><i className="fa fa-linkedin"></i></a>
            <a href="https://soundcloud.com/nevilgeorge" target="_blank"><i className="fa fa-soundcloud soundcloud-icon"></i></a>
            <a href="https://github.com/nevilgeorge" target="_blank"><i className="fa fa-github"></i></a>
        </div>
      </div>
    );
  }
}

export default Intro;
