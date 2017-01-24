import React from 'react';
import {Route, Router, browserHistory} from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';


const App = () => {
  return (
    <section>
      <Header />
      <Main />
    </section>
  );
}

export default App;
