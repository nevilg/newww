// Intro.jsx

import React from 'react';

class Intro extends React.Component {
  render() {
    return (
      <div className="col-md-12 intro-text">
        <h1 className="animated fadeInDown">nevil george</h1>
        <h3>computer science at northwestern university</h3>
        <h3>incoming software engineer at uber</h3>

        <div className="icons">
            <a href="http://linkedin.com/in/nevilgeorge" target="_blank"><i className="fa fa-linkedin-square"></i></a>
            <a href="https://twitter.com/nevilsgeorge" target="_blank"><i className="fa fa-twitter-square"></i></a>
            <a href="https://github.com/nevilgeorge" target="_blank"><i className="fa fa-github-square"></i></a>
        </div>
      </div>
    );
  }
}

export default Intro;
