import React from 'react';
import {Route, Router, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import App from '../App/App';
import InputSection from '../InputSection/InputSection';
import JokesSection from '../JokesSection/JokesSection';
import Settings from '../Settings/Settings';
import Favorites from '../Favorites/Favorites';


const Path = () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='home'/>
        <Route path='home' component={InputSection}>
          <Route path='/jokes' component={JokesSection}/>
          <Route path='/favs' component={Favorites}/>
        </Route>
        <Route path='settings' component={Settings}/>
      </Route>
    </Router>
  );
}

export default Path;
