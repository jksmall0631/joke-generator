import React, {Component} from 'react';
import Header from '../Header/Header';
import Joke from '../Joke/Joke';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      jokes: null,
    }
    this.grabName = this.grabName.bind(this);
    this.grabJokes = this.grabJokes.bind(this);
  }

  grabName(name){
    this.setState({name: name});
  }

  grabJokes(jokes){
    this.setState({jokes: jokes})
  }

  render(){
    return (
      <section>
        <Header />
        <Joke />
        <div>
          {React.cloneElement(this.props.children, {
            grabName: this.grabName,
            grabJokes: this.grabJokes,
            jokes: this.state.jokes,
            })}
        </div>
      </section>
    );
  }
}
