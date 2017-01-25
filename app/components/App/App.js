import React from 'react';
import Header from '../Header/Header';
import Joke from '../Joke/Joke';

const App = (props) => {
  return (
    <section>
      <Header />
      <Joke />
      <div>
        {props.children}
      </div>
    </section>
  );
}

export default App;
