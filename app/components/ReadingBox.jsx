// ReadingBox.jsx

import React from 'react';

class ReadingBox extends React.Component {
  render() {
    return (
      <div className="reading-box">
        <h2>
          <a className="hyperlink" href={this.props.link} target="_blank">
            {this.props.title}
          </a>
          <span>
            {this.props.date}
          </span>
        </h2>
        <h3>{this.props.author}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default ReadingBox;
