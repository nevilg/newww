// Readings.jsx

import React from 'react';
import ContentPage from './ContentPage.jsx';
import ReadingBox from './ReadingBox.jsx'

class Readings extends React.Component {
  render() {

    const readings = [
      {
        title: 'why people cheat',
        date: '2016/02/08',
        link: 'https://www.washingtonpost.com/news/wonk/wp/2016/02/08/why-winners-become-cheaters/?utm_term=.e73217692f1d'
      },
      {
        title: 'a couple in chicago',
        date: '2016/03/12',
        link: 'https://www.newyorker.com/magazine/2009/01/19/a-couple-in-chicago'
      },
      {
        title: 'on finding your purpose',
        date: '2016/07/16',
        link: 'http://tranquilmonkey.com/hunter-s-thompsons-extraordinary-letter-on-finding-your-purpose/'
      }
    ];

    const readingBoxes = readings.reverse().map((reading, index) => {
      return (
        <div key={index} className="reading-box col-xs-12 col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3">
          <ReadingBox
            title={reading.title}
            date={reading.date}
            link={reading.link}
            description={reading.description}
          />
        </div>
      );
    });

    return (
      <ContentPage
        title="readings"
        content={readingBoxes}
      />
    );
  }
}

export default Readings;
