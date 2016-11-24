// App.jsx

import React from 'react';
import Footer from './Footer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}

        <Footer />
      </div>
    );
  }
}

// module.exports in ES6!!!
export default App;
