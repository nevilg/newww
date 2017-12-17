// Readings.jsx

import React from 'react';
import ContentPage from './ContentPage.jsx';
import ReadingBox from './ReadingBox.jsx';
import readings from '../content/readings.json';

class Readings extends React.Component {
  constructor(props) {
    super(props);
    const readingBoxes = readings.map((reading, index) => {
      return (
        <div key={index} className="reading-box col-xs-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
          <ReadingBox
            title={reading.title}
            date={reading.date}
            link={reading.link}
            author={reading.author}
            description={reading.description}
          />
        </div>
      );
    });

    this.state = {readingBoxes: readingBoxes};
  }

  render() {
    return (
      <ContentPage
        title="readings"
        content={this.state.readingBoxes}
      />
    );
  }
}

export default Readings;
