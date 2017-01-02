import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, Link, hashHistory } from 'react-router'
import App from './components/App';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
  , document.getElementById('root')
);

// ReactDOM.render(
//   <App />, document.getElementById('root')
// );
