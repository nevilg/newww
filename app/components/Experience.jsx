// Experience.jsx

import React from 'react';
import ContentPage from './ContentPage.jsx';
import ExperienceBox from './ExperienceBox.jsx';

class Experience extends React.Component {
  render() {

    const experiences = [
      {
        company: 'uber technologies, inc',
        position: 'software engineer',
        duration: 'sept \'16 - now',
        description: 'Working on Maps Services to improve ETAs across Uber.'
      },
      {
        company: 'uber technologies, inc',
        position: 'software engineering intern',
        duration: 'jun \'15 - sept \'15',
        description: 'Worked on Supply Engineering to increase the number of driver signups through referrals. Built a client-side tool in React that allows ops to control and customize driver referral campaigns. Wrote Python for the referrals backend service, and maintained 100% test coverage for the entire application.'
      },

      {
        company: 'eecs dept, northwestern university',
        position: 'undergraduate teaching assistant',
        duration: 'sept \'14 - march \'16',
        description: 'Courses: Intro. to Computer Systems, Data Structures & Data Management, Intro. to Database Systems. Instructed discussion sections for over 40 students, held office hours, graded assignments/exams.'
      },

      {
        company: 'shmoop university, inc',
        position: 'software engineering intern',
        duration: 'june \'14 - aug \'14',
        description: 'Wrote unit tests for client-side JavaScript in Chai, Mocha and KarmaJS. Developed a tool to abstract site ads in JavaScript and PHP. Refactored over 10,000 lines of PHP to follow the factory design pattern.'
      },

      {
        company: 'shmoop university, inc',
        position: 'software consultant',
        duration: 'sept\'13 - june \'14',
        description: 'Designed and developed online drills for Shmoop\'s online math courses in JavaScript and HTML5 Canvas.'
      }
    ];

    var experienceBoxes = experiences.map((experience, index) => {
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

    return (
      <ContentPage
        title="experience"
        content={experienceBoxes}
      />
    );
  }
}

export default Experience;
