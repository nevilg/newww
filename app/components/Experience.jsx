// Experience.jsx

import React from 'react';
import ContentPage from './ContentPage.jsx';
import ExperienceBox from './ExperienceBox.jsx';
import experiences from '../content/experiences.json';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    const experienceBoxes = experiences.map((experience, index) => {
      return (
        <div key={index} className="experience-box col-xs-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
          <ExperienceBox
            company={experience.company}
            position={experience.position}
            duration={experience.duration}
            description={experience.description}
          />
        </div>
      );
    });

    this.state = {experienceBoxes: experienceBoxes};
  }

  render() {
    return (
      <ContentPage
        title="experience"
        content={this.state.experienceBoxes}
      />
    );
  }
}

export default Experience;
