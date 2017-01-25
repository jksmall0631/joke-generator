import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import App from '../App/App';
import InputSection from '../InputSection/InputSection';


const Path = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={InputSection}/>
      </Route>
    </Router>
  );
}

export default Path;
