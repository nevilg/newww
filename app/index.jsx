// index.jsx

import './styles/main.scss';
import './styles/font-awesome.css';
import './styles/ropa-sans.css';
import './styles/animate.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import App from './components/App.jsx';
import Intro from './components/Intro.jsx';
import Experience from './components/Experience.jsx';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/newww/" component={App}>
      <IndexRoute component={Intro} />
      <Route path="/experience" component={Experience} />
    </Route>
  </Router>
), document.getElementById('app'));
