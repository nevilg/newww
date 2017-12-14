// ExperienceBox.jsx

import React from 'react';

class ExperienceBox extends React.Component {
  render() {
    return (
      <div className="experience-box">
        <h2>
          {this.props.company}
          <span>{this.props.duration}</span>
        </h2>
        <h3>{this.props.position}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default ExperienceBox;
