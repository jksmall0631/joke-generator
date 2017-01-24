import React from 'react';
import { render } from 'react-dom';
import './styles';
import Header from './components/header/Header';


const App = () => {
  return (
    <section>
      <Header />
    </section>
  );
}

render(<App />, document.querySelector('.application'));
