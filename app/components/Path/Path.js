import React from 'react';
import {Route, Router, browserHistory} from 'react-router';
import App from '../App/App';


const Path = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  );
}

export default Path;
