// ContentPage.jsx

import React from 'react';

class ContentPage extends React.Component {
  render () {
    return (
      <div className="main-content container col-xs-12 col-md-12 col-lg-12">
        <h2 className="animated fadeInDown main-title">
          {this.props.title}
        </h2>

        {this.props.content}
      </div>
    );
  }
}

export default ContentPage;
