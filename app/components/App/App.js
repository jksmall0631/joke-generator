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
    let array = name.split(' ');
    this.setState({name: array});
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
            name: this.state.name,
            })}
        </div>
      </section>
    );
  }
}
