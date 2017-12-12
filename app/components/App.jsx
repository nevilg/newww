// App.jsx

import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

// module.exports in ES6!!!
export default App;
