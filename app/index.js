import React from 'react';
import { render } from 'react-dom';
import './styles';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


const App = () => {
  return (
    <section>
      <Header />
      <Main />
    </section>
  );
}

render(<App />, document.querySelector('.application'));
